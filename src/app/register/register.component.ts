import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
@Output() cancelRegister=new EventEmitter();

model:any={};
  constructor(private authService:AuthService,private alertify:AlertifyService) { }
 
  ngOnInit() {
  }

  register() {    
    this.authService.register(this.model).subscribe({
      next:(res)=>
      {
        this.alertify.success('Registration Successfully');
      },
      error:(err)=>{
        this.alertify.error(err);
      }
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
