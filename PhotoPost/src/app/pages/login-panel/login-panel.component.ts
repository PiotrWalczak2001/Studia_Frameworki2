import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent {
  @Output() loginClicked: EventEmitter<boolean> = new EventEmitter();
  
  constructor() {
  }

  btnClicked(): void {
    this.loginClicked.emit(true);
  }
}