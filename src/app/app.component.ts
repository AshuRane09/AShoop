import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './services/firebase-auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ashoop';
  constructor(
    private userService: UserService,
    private auth: FirebaseAuthService,
    router: Router
  ) {
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
