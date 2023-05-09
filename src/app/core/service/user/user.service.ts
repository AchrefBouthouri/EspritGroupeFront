import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../model/user.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = 'http://localhost:8001/api'

  constructor(private httpClient: HttpClient) { }
  getUsers():Observable<any[]>{
    return this.httpClient.get<any>(this.URL+"/users");
  }
  updateUser(user:User):Observable<User>{
    return this.httpClient.put<User>(this.URL+"user/update/"+user.id,user);
  }
  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(this.URL + "/deleteUser/"+id);
  }

  roleToUser(role: any){
    return this.httpClient.post(this.URL+'/role/addtouser',role);
  }

}
