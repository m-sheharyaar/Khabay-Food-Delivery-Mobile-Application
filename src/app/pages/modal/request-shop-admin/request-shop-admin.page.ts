import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Env } from '../../../services/env';
import { Commonservices } from '../../../services/commonservices';
import { HttpClient } from '@angular/common/http';
import { ModalController, ToastController, LoadingController, ActionSheetController } from '@ionic/angular';

@Component({
    selector: 'app-request-shop-admin',
    templateUrl: './request-shop-admin.page.html',
    styleUrls: ['./request-shop-admin.page.scss'],
})
export class RequestShopAdminPage implements OnInit {
    disabled = true;
    checkbox = false;
    l_checkbox = false;
    env: any;
    checkbox1 = false;

    constructor(
        public modal: ModalController,
        public http: HttpClient,
        public toastCtrl: ToastController,
        public ToastCtrl: LoadingController,
        public ref: ChangeDetectorRef,
        public commonService: Commonservices
    ) {
        this.env = new Env();
    }

    ngOnInit() {
    }

    chkAgreed() {
        if (this.l_checkbox) {
            this.disabled = true;
            this.checkbox = false;
            this.l_checkbox = false;
        }
        else {
            this.disabled = false;
            this.checkbox = true;
            this.l_checkbox = true;
        }
        this.ref.detectChanges();
    }

    insertUpdateUserShopAdminRole() {
        const shopAdminRole: any = {
            UserID: localStorage.getItem('userID'),
            RoleID: this.env.adminRole.ShopAdminID,
            Status: this.env.ShopAdminStatus.Pending,
        }

        let options: any = {};
        var control = this;
        options.title = 'insertUpdateUserShopAdminRole!!!';
        options.apiURL = this.env.userApi.insertUpdateUserShopAdminRole;
        options.catchErrorText = 'UserController: error => insertUpdateUserShopAdminRole()';
        options.methodType = 'POST';
        options.paramData = shopAdminRole;
        options.isLoader = false;
        options.preventShowOnSucess = true;
        options.successCallback = function (data) {
            if (data.Status[0].Success == true) {
                control.modal.dismiss();
            }
        }
        this.commonService.httpPost(options);
    }

    back() {
        this.modal.dismiss();
    }
}
