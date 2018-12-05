import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { UserInterface } from '../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  registerUser(name: string, email: string, password: string) {
    const url_api = "http://localhost:3000/api/Users";
    return this.http
      .post<UserInterface>(
        url_api,
        {
          name: name,
          email: email,
          password: password
        },
        { headers: this.headers }
      )
      .pipe(map(data=>data));
  }

  loginUser(email: string, password: string):Observable<any>{
    const url_api = "http://localhost:3000/api/Users/login?include=user";
    return this.http.post<UserInterface>(url_api,{email,password},{headers:this.headers})
    .pipe(map(data=>data));
  }


  setUser(user:UserInterface):void {
    let user_string=JSON.stringify(user);
    localStorage.setItem("currentUser",user_string);
  }
  setToken(token) :void{
      localStorage.setItem("accesToken",token);
  }

  getToken() {
    return localStorage.getItem("accesToken");
  }
  getCurrentUser():UserInterface{
    let user_string=localStorage.getItem('currentUser');
    if(!isNullOrUndefined(user_string)){
      let user:UserInterface=JSON.parse(user_string);
      return user;
    }else{
      return null;
    }
  }

  logOutUser(){
    let accesToken=localStorage.getItem('accesToken');
    const url_api= `http://localhost:3000/api/Users/logout?access_token=${accesToken}`;
    localStorage.removeItem('accesToken')
    localStorage.removeItem('currentUser')
    return this.http.post<UserInterface>(url_api,{headers:this.headers});

  }

}
