import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    console.log('soy el header')
  }

  getUser(): User {
    return this.UserService.getUser();
  }

  logout(): void {
    this.UserService.logout();
    this.UserService.setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

}
