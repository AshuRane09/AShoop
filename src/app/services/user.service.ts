import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFireDatabase) {}
  save(user: firebase.User) {
    //defining location of user object in database
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
    });
  }
  get(uid: string): Observable<AppUser> {
    return this.db.object<AppUser>('/users/' + uid).valueChanges();
  }
}