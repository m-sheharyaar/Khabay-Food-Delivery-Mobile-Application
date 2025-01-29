import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutStatusUpdateModalPage } from '../modal/about-status-update-modal/about-status-update-modal.page';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { LoadingController, ModalController, PopoverController, Events } from '@ionic/angular';
import { Env } from '../../services/env';
import { Commonservices } from '../../services/commonservices';
import { DeleteStatusPopoverPage } from '../popover/delete-status-popover/delete-status-popover.page';
import { SingleAboutStatusPopoverPage } from '../popover/single-about-status-popover/single-about-status-popover.page';

@Component({
    selector: 'app-about-status',
    templateUrl: './about-status.page.html',
    styleUrls: ['./about-status.page.scss'],
})
export class AboutStatusPage implements OnInit {
    env: any;
    l_AboutList: any = [];
    l_AboutStatus;
    l_UserStatusAboutID;

    constructor(private http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        public modal: ModalController,
        private router: Router,
        public popoverController: PopoverController,
        public events: Events,
        public commonService: Commonservices) {
        this.env = new Env();
        this.l_UserStatusAboutID = localStorage.getItem('userAboutStatusID');
        this.l_AboutStatus = localStorage.getItem('userAboutStatus');
    }

    ngOnInit() { }

    back() {
        this.router.navigateByUrl('/user-profile');
    }

    ionViewWillEnter() {
        this.getAboutlist();
    }

    getAboutlist(infiniteScroll?, refresher?) {
        let options: any = {};
        var control = this;
        options.title = 'Get - Get about!!!';
        options.apiURL = this.env.userApi.getUserAboutStatusURL + localStorage.getItem('userID');//UserID
        options.catchErrorText = 'ShopController: error => GetShop()';
        options.methodType = 'GET';
        options.preventShowOnSucess = true;
        options.isLoader = false;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_AboutList = control.commonService.infiniteScrollAndRefersh(infiniteScroll, refresher, data.Result, control.l_AboutList);
            }
        }

        this.commonService.httpPost(options);
    }

    doRefresh(refresher) {
        this.getAboutlist("", refresher);
    }

    select(description, stustId) {
        const updateabout: any = {
            UserID: localStorage.getItem('userID'),
            UserName: localStorage.getItem('userName'),
            UserStatusAboutID: stustId,
            Description: description,
        }
        let options: any = {};
        var control = this;
        options.title = 'edit User!!!';
        options.apiURL = this.env.userApi.insertUpdateUserAboutStatusURL;
        options.catchErrorText = 'UserController: error => addUser()';
        options.methodType = 'POST';
        options.paramData = updateabout;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.l_AboutStatus = description;
                localStorage.setItem('userAboutStatus', description);
                control.events.publish('updateStatus');
                for (let i = 0; i < control.l_AboutList.length; i++) {
                    if (control.l_AboutList[i].UserAboutStatusID == stustId) {
                        control.l_AboutList[i].IsActive = 1;
                    }
                    else {
                        control.l_AboutList[i].IsActive = 0;
                    }
                }
            }
        }
        this.commonService.httpPost(options);
    }


    doInfinite(infiniteScroll) {
        this.getAboutlist(infiniteScroll);
    }
    async openModal(userAboutStatusID) {
        var userStatusAboutId = userAboutStatusID;
        const modal = await this.modal.create({
            component: AboutStatusUpdateModalPage,
            componentProps: {
                aboutstat: this.l_AboutStatus,
                aboutsatusId: userStatusAboutId,
            }
        });

        modal.onDidDismiss()
            .then((data) => {
                this.l_UserStatusAboutID = localStorage.getItem('userAboutStatusID');
                this.l_AboutStatus = localStorage.getItem('userAboutStatus');
                this.getAboutlist();
            });

        return await modal.present();
    }

    async openPopover(ev: Event) {
        var control = this;
        const popover = await this.popoverController.create({
            component: DeleteStatusPopoverPage,
            event: ev,
            translucent: true
        });

        popover.onDidDismiss()
            .then((data) => {
                this.getAboutlist();
            });

        return await popover.present();
    }

    async openPopover1(ev: Event, aboutstatusID, isActive) {
        if (isActive == 1) {
            let optionMsg: any = {};
            optionMsg.message = 'This Status is marked active.';
            this.commonService.msgToast(optionMsg);
            return;
        }
        var aboutID = aboutstatusID;
        var control = this;
        const popover = await this.popoverController.create({
            component: SingleAboutStatusPopoverPage,
            componentProps: {
                aboutsatusId: aboutID,
            },
            event: ev,
            translucent: true
        });

        popover.onDidDismiss()
            .then((data) => {
                this.getAboutlist();
            });

        return await popover.present();
    }

}
