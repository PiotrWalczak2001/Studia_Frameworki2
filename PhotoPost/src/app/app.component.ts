import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logged = false;

  ngOnInit() {
    //this.logged = true; // for develop test
  }

  login() {
    this.logged = true;
   // this.setUserData();
  }

  logout() {
    this.logged = false;
  }
}
