import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    authenticationState = new BehaviorSubject(false);
 
    constructor(private storage: Storage, private plt: Platform) { 
      this.plt.ready().then(() => {
        this.checkToken();
      });
    }
   
    checkToken() {
      this.storage.get(TOKEN_KEY).then(res => {
        if (res) {
          this.authenticationState.next(true);
          localStorage.setItem('NewKey', 'true');
        }
      })
    }
   
    login() {
      return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
        this.authenticationState.next(true);
        localStorage.setItem('NewKey', 'true');
      });
    }
   
    logout() {
      return this.storage.remove(TOKEN_KEY).then(() => {
        this.authenticationState.next(false);
        localStorage.removeItem('NewKey');
      });
    }
   
    isAuthenticated() {
      return this.authenticationState.value;
    }
}
