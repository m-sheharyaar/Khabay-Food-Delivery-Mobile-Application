import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.page.html',
  styleUrls: ['./notification-settings.page.scss'],
})
export class NotificationSettingsPage implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  back() {
    this.router.navigate(['tabs/settings']);
  }
}
