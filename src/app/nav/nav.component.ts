import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService:AuthService,private alertify: AlertifyService) { }

  ngOnInit(): void {
  }
  // login() {
  //   this.authService.login(this.model).subscribe(next=>{
  //     console.log('Logged in successfully');
  //   }, error => {
  //     console.log('Failed to Login');
  //   });
  // }
  login() {    
    this.authService.login(this.model).subscribe({
      next : (res) => {
        this.alertify.success("Logged in successfully");
      },
      error(err){
        console.log(err);
      }
    });
  }

  loggedIn()
  {
    const token=localStorage.getItem('token');
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
