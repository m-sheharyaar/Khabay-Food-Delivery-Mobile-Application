import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
    selector: 'app-introduction',
    templateUrl: './introduction.page.html',
    styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {

    slideOpts = {
        //initialSlide: 1,
        speed: 800,
        autoplay: {
            delay: 5000
        }
    };

    constructor(private router: Router) { }

    ngOnInit() {
    }

    slidesDidLoad(slides: IonSlides) {
        slides.startAutoplay();
    }

    slidesDidStop(slides: IonSlides) {
        slides.stopAutoplay();
    }

    next() {
        this.router.navigateByUrl('/signup_welcome');
    }
}
