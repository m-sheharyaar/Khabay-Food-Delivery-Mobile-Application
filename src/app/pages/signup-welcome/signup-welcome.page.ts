import { Component, OnInit } from '@angular/core';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { Sqlservices } from '../../services/sqlservices';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
    selector: 'app-signup-welcome',
    templateUrl: './signup-welcome.page.html',
    styleUrls: ['./signup-welcome.page.scss'],
})
export class SignupWelcomePage implements OnInit {
    env: any;
    sqlService: any;
    productList: any = [];
    l_userName;

    constructor(
        public http: HttpClient,
        public toastController: ToastController,
        public loadingController: LoadingController,
        private router: Router,
        public events: Events,
        private sqlite: SQLite,
        private authService: AuthenticationService,
        public commonService: Commonservices
    ) {
        this.env = new Env();
        this.sqlService = new Sqlservices(this.sqlite);
    }

    ngOnInit() { }

    next() {
        this.sqlService.createLocalDB();
        this.authService.login();
    }
}
