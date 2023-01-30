import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logged = false;
  develop = true;
  user: Observable<User> = new Observable<User>();
  constructor(private userService: UserService) {}

  ngOnInit() {
    if(this.develop){
      this.logged = true;
      this.user = this.userService.getUserById(1);
    }
  }

  setUserData() {
    this.user = this.userService.getUserById(1);
  }

  login() {
    this.logged = true;
    this.setUserData();
  }

  logout() {
    this.logged = false;
  }
}
