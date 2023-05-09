import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {User} from "../../model/user.model";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'http://localhost:8001/api'


  constructor(private httpClient: HttpClient) {
  }
    addUser(user: any){
      return this.httpClient.post(this.URL+'/user/save',user);
    }
  login(username: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username',username);
    body.set('password',password);
   const options = {
     headers : new HttpHeaders().set(
       'Content-type',
       'application/x-www-form-urlencoded'
     )
   };
   options.headers.append("Access-Control-Allow-Origin","*");
   return this.httpClient.post(this.URL + '/login',body.toString(),options);
  }


}
