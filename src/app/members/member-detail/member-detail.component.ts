import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
user:User;
  constructor(private userservice:UserService,private alertify:AlertifyService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();
  }
loadUser() {    
  this.userservice.getUser(+this.route.snapshot.params).subscribe({
    next : (user:User) => {
     this.user=user;
    },
    error:(err)=>{
     this.alertify.error(err);
    }
  });
}
}
