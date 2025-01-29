import { Injectable } from "@angular/core";
import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPipesModule } from '../app/pipes/pipes.module';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Camera} from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { LaunchNavigator} from '@ionic-native/launch-navigator/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { HammerGestureConfig } from "@angular/platform-browser";
import { SplashPageModule } from './pages/splash/splash.module';
/**
 * @hidden
 * This class overrides the default Angular gesture config.
 */
@Injectable()
export class IonicGestureConfig extends HammerGestureConfig {
    buildHammer(element: HTMLElement) {
      const mc = new (<any>window).Hammer(element);
  
      for (const eventName in this.overrides) {
        if (eventName) {
          mc.get(eventName).set(this.overrides[eventName]);
        }
      }
  
      return mc;
    }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AppPipesModule,
    SplashPageModule,
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot()],
  providers: [ 
    StatusBar,
    SplashScreen,
    SQLite,
    Device,
    WebView,
    Camera,
    File,
    FileTransfer,
    FileTransferObject,
    LaunchNavigator,
    LocalNotifications,
    SocialSharing,
    NativeGeocoder,
    Geolocation,
    AppMinimize,
    FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: IonicGestureConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
