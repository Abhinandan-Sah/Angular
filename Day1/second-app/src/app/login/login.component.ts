import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = "";
  userpassword: string = "";
  msg: string = "";
  login(){
    if (this.username === 'admin' && this.userpassword === 'admin') {
      this.msg = 'Login successful';
    } else {
      this.msg = 'Invalid username or password';
    }
  }
}
