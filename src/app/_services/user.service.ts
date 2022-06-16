import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

const httpOptions={
    headers:new HttpHeaders({
        'Authorization':'Bearer '+localStorage.getItem('token')
    })
}
@Injectable()
export class UserService {
baseUrl=environment.apiUrl;
constructor(private http:HttpClient) { }

getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+'users',httpOptions);
}
getUser(id:number):Observable<User>{
    return this.http.get<User>(this.baseUrl+'user/'+id,httpOptions);
}
}
