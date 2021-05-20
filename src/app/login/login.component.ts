import { Component } from '@angular/core';
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: FirebaseAuthService) {}

  googleLogin() {
    this.auth.googleLogin();
  }

  onSignIn(email: any, password: any): void {
    console.log(email, password);
  }
}
