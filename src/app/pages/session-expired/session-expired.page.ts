import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-session-expired',
    templateUrl: './session-expired.page.html',
    styleUrls: ['./session-expired.page.scss'],
})
export class SessionExpiredPage implements OnInit {

    constructor(
        private router: Router) { }

    ngOnInit() {
    }

    gotoSignUp() {
        this.router.navigate(['signup_phone']);
    }
}
