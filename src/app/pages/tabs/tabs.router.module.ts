import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

import { SearchShopModalPageModule } from '../modal/search-shop-modal/search-shop-modal.module';
import { FeedbackModalPageModule } from '../modal/feedback-modal/feedback-modal.module';
import { UserProfileEditPageModule } from '../modal/user-profile-edit/user-profile-edit.module';
import { AboutStatusUpdateModalPageModule } from '../modal/about-status-update-modal/about-status-update-modal.module';
import { RequestShopAdminPageModule } from '../modal/request-shop-admin/request-shop-admin.module';
import { ViewListModalPageModule } from '../modal/view-list-modal/view-list-modal.module';

import { FavouritePopoverPageModule } from '../popover/favourite-popover/favourite-popover.module';
import { DeleteStatusPopoverPageModule } from '../popover/delete-status-popover/delete-status-popover.module';
import { DeleteSingleShopPopoverPageModule } from '../popover/delete-single-shop-popover/delete-single-shop-popover.module';
import { DeleteAllShopsPopoverPageModule } from '../popover/delete-all-shops-popover/delete-all-shops-popover.module';
import { SingleAboutStatusPopoverPageModule } from '../popover/single-about-status-popover/single-about-status-popover.module';
import { DeleteAllFavouritePopoverPageModule } from '../popover/delete-all-favourite-popover/delete-all-favourite-popover.module';
import { AllDeleteSubscribedShopPageModule } from '../popover/all-delete-subscribed-shop/all-delete-subscribed-shop.module';
import { SingleDeleteSuscribedShopPageModule } from '../popover/single-delete-suscribed-shop/single-delete-suscribed-shop.module';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    },
                ]
            },
            {
                path: 'shop',
                children: [
                    {
                        path: '',
                        loadChildren: '../shop/shop.module#ShopPageModule'
                    },
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: '../settings/settings.module#SettingsPageModule'
                    }
                ]
            },
              {
                path: 'user-ShopList',
                children: [
                  {
                    path: '',
                    loadChildren: '../user-shop-list/user-shop-list.module#UserShopListPageModule'
                  }
                ]
              },
            {
                path: '',
                redirectTo: '/tabs/user-ShopList',
                pathMatch: 'full'
            }
        ]
    },
    { path: 'notifications', loadChildren: '../notifications/notifications.module#NotificationsPageModule' },
    { path: 'NotificationSettings', loadChildren: '../notification-settings/notification-settings.module#NotificationSettingsPageModule' },
    { path: 'favorites', loadChildren: '../favorites/favorites.module#FavoritesPageModule' },
    { path: 'shop_information', loadChildren: '../shop-information/shop-information.module#ShopInformationPageModule' },
    { path: 'shop_feedback', loadChildren: '../shop-feedback/shop-feedback.module#ShopFeedbackPageModule' },
    { path: 'review_all', loadChildren: '../review-all/review-all.module#ReviewAllPageModule' },
    { path: 'insert-shop-basicInformation', loadChildren: '../insert-shop-basic-information/insert-shop-basic-information.module#InsertShopBasicInformationPageModule' },
    { path: 'insert-shop-promotions', loadChildren: '../insert-shop-promotions/insert-shop-promotions.module#InsertShopPromotionsPageModule' },
    { path: 'insert-shop-timing', loadChildren: '../insert-shop-timing/insert-shop-timing.module#InsertShopTimingPageModule' },
    { path: 'insert-shop-discount', loadChildren: '../insert-shop-discount/insert-shop-discount.module#InsertShopDiscountPageModule' },
    { path: 'user-profile', loadChildren: '../user-profile/user-profile.module#UserProfilePageModule' },
    { path: 'user-ShopList', loadChildren: '../user-shop-list/user-shop-list.module#UserShopListPageModule' },
    { path: 'shop-update', loadChildren: '../shop-update/shop-update.module#ShopUpdatePageModule' },
    { path: 'aboutStatus', loadChildren: '../about-status/about-status.module#AboutStatusPageModule' },
    { path: 'shop-subscription', loadChildren: '../shop-subscription/shop-subscription.module#ShopSubscriptionPageModule' },
    { path: 'help', loadChildren: '../help/help.module#HelpPageModule' },
    {
        path: '',
        redirectTo: '/tabs/user-ShopList',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        SearchShopModalPageModule,
        FeedbackModalPageModule,
        UserProfileEditPageModule,
        AboutStatusUpdateModalPageModule,
        RequestShopAdminPageModule,
        FavouritePopoverPageModule,
        DeleteStatusPopoverPageModule,
        DeleteSingleShopPopoverPageModule,
        DeleteAllShopsPopoverPageModule,
        SingleAboutStatusPopoverPageModule,
        DeleteAllFavouritePopoverPageModule,
        AllDeleteSubscribedShopPageModule,
        SingleDeleteSuscribedShopPageModule,
        ViewListModalPageModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }
