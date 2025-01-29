import { Component, ChangeDetectorRef } from '@angular/core';

import { Platform, Events, ModalController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SplashPage } from './pages/splash/splash.page';
import { AuthenticationService } from './services/authentication.service';
import { Device } from '@ionic-native/device/ngx';
import { Router } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Commonservices } from '../app/services/commonservices';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { reject } from 'q';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    backButtonSubscription;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authenticationService: AuthenticationService,
        private device: Device,
        private router: Router,
        public geolocation: Geolocation,
        private localNotification: LocalNotifications,
        public fcm: FCM,
        public events: Events,
        public ref: ChangeDetectorRef,
        public modalCtrl: ModalController,
        public toastCrlt: ToastController,
        public commonService: Commonservices,
        private appMinimize: AppMinimize
    ) {
        // this.openModal();
        this.fcm.onNotification().subscribe(data => {
            setTimeout(() => {
                if (data.wasTapped) {
                    console.log(data.title);
                    console.log(data.body);
                    console.log(data.ID);
                    console.log("Received in background");
                    localStorage.setItem("shopID", data.ID);
                    localStorage.setItem("home", "true");
                    this.router.navigate(['shop_information']);
                }
                else {
                    console.log(data.title);
                    console.log(data.body);
                    console.log("Received in foreground");
                    localStorage.setItem('NotificationBellIcon', 'true');
                    // this.l_notifyIcon = localStorage.getItem('NotificationBellIcon');
                    this.ref.detectChanges();
                    this.events.publish('NotificationReceive');
                    this.NewpushNotification(data.title, data.body);
                };
            }, 1000);
        })
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleLightContent();
            setTimeout(() => {
                this.splashScreen.hide();
            }, 6000);
            localStorage.setItem('DeviceID', this.device.uuid);
            console.log('DeviceID=', this.device.uuid);
            let options = { enableHighAccuracy: true };
            this.geolocation.getCurrentPosition(options).then(result => {
                var latOri: any = result.coords.latitude;
                var longOri: any = result.coords.longitude;
                localStorage.setItem('latitude', latOri);
                localStorage.setItem('longitude', longOri);
                console.log('latitude =' + latOri);
                console.log('longitude =' + longOri);
            }).catch(function (e) {
                //console.log('2-error')
                //alert('Please allow loction!')
            });
            this.authenticationService.authenticationState.subscribe(state => {
                if (state) {
                    this.router.navigate(['tabs']);
                } else {
                    if (localStorage.getItem('NewKey') == null)
                        this.router.navigate(['getStarted']);
                }
            });
        });
    }

    ngAfterViewInit() {
        this.backButtonSubscription = this.platform.backButton.subscribe(() => {
            if (localStorage.getItem('hometab') == 'true') {
                localStorage.removeItem('hometab');
                this.appMinimize.minimize();
                reject();
            }
            else if (localStorage.getItem('othertabs') == 'true') {
                localStorage.removeItem('othertabs')
                this.router.navigate(['tabs/home']);
            }
        });
    }

    async openModal() {
        console.log('Modalsplash');
        const modal = await this.modalCtrl.create({
            component: SplashPage
        });
        return await modal.present();
    }

    pushNotification() {
        this.platform.ready().then(() => {
            this.localNotification.schedule({
                title: 'App Opened',
                trigger: { every: { hour: 24, minute: 0 } },
                text: 'This app provide best discounts on foods.',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfXKe6Yfjr6rCtR6cMPJB8CqMAYWECDtDqH-eMnerHHuXv9egrw',
                //trigger: { at: new Date(new Date().getTime() + 48000) },
                led: 'FF0000',

            });
        });
    }

    NewpushNotification(title, body) {
        this.platform.ready().then(() => {
            this.localNotification.schedule({
                title: title,
                trigger: { at: new Date(new Date().getTime() + 3600) },
                text: body,
                //icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfXKe6Yfjr6rCtR6cMPJB8CqMAYWECDtDqH-eMnerHHuXv9egrw',
                //trigger: { at: new Date(new Date().getTime() + 48000) },
                led: 'FF0000',

            });
        });
    }
}
