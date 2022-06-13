import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  // values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getValues();
  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  // getValues() {
  //   this.http.get('http://localhost:5221/api/Values/GetValues')
  //     .subscribe(Response => {
  //       this.values = Response;
  //       console.log(Response)
  //     });
  // }
  cancelRegister(event:any) {
 console.log(event);
 
  }
}
