import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { AlertifyService } from '../../_services/alertify.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
 users:User[];
  constructor(private userService:UserService,private alertify:AlertifyService) { }

  ngOnInit() {
    this.loadUsers();
  }
  
  loadUsers() {    
    this.userService.getUsers().subscribe({
      next: (users:User[]) => {
        this.users=users;
      },
      error:(err)=>{
       this.alertify.error(err);
      }
    });
  }


}
