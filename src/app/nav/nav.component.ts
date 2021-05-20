import { Component } from '@angular/core';
import { AppUser } from '../models/app-user';
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  appUser: AppUser;
  constructor(private auth: FirebaseAuthService) {
    auth.appUser$.subscribe((appUser) => (this.appUser = appUser));
  }

  logout() {
    this.auth.logout();
  }
}
