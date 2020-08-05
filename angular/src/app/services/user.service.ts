import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { User } from '../models/user.model';
import { Login } from '../interfaces/login';
import { Credentials } from '../interfaces/credentials'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL:string = environment.API_URL;
  private user: User;
  constructor(private HttpClient: HttpClient) { }

  register(user: User): Observable<User> {
    console.log(user);
    return this.HttpClient.post<User>(this.API_URL + '/api/auth/signup', user);
  }

  login(credentials: Credentials): Observable<Login> {
    return this.HttpClient.post<Login>(this.API_URL + '/api/auth/login', credentials);
  }

  setUser(user: User):void {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }

  logout(): void {
    this.HttpClient.get(this.API_URL + '/api/auth/logout', {
      headers: {
        authorization: localStorage.getItem('authToken')
      }
    })
    .subscribe(console.log);
    this.setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');

  }
}
