import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
//import { SplashPageModule } from './pages/splash/splash.module';

const routes: Routes = [
    { path: '', canActivate: [AuthGuard], loadChildren: './pages/member-routing.module#MemberRoutingModule' },
    { path: 'getStarted', loadChildren: './pages/get-started/get-started.module#GetStartedPageModule' },
    { path: 'signup_phone', loadChildren: './pages/signup-phone/signup-phone.module#SignupPhonePageModule' },
    { path: 'signup_verification', loadChildren: './pages/signup-verification/signup-verification.module#SignupVerificationPageModule' },
    { path: 'signup_user_registration', loadChildren: './pages/signup-user-registration/signup-user-registration.module#SignupUserRegistrationPageModule' },
    { path: 'introduction', loadChildren: './pages/introduction/introduction.module#IntroductionPageModule' },
    { path: 'signup_welcome', loadChildren: './pages/signup-welcome/signup-welcome.module#SignupWelcomePageModule' },
    { path: 'sessionExpired', loadChildren: './pages/session-expired/session-expired.module#SessionExpiredPageModule' },
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
    { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
    //{ path: 'splash', loadChildren: './pages/splash/splash.module#SplashPageModule' }
];
@NgModule({
    imports: [
        //SplashPageModule,
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
