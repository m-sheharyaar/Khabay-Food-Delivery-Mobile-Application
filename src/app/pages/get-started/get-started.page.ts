import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-get-started',
    templateUrl: './get-started.page.html',
    styleUrls: ['./get-started.page.scss'],
})
export class GetStartedPage implements OnInit {

    constructor(
        private router: Router,
        private platform: Platform 
    ) { }

    ngOnInit() {
        localStorage.setItem('appClose','true');
        this.platform.backButton.subscribe( () => {
            localStorage.setItem('appClose','true');
          });
    }

    gotoSignUp() {
        localStorage.removeItem('appClose')
        this.router.navigateByUrl('/signup_phone');
    }
}
