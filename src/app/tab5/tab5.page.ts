import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(public platform: Platform, public navCtrl: NavController) { }

  ngOnInit() {
  }

  NavToStuHealth()
  {
    this.platform.ready().then(()=>{ let browser = new InAppBrowserObject("https://www.gmit.ie/student-life/student-health-and-wellbeing")});
  }
}
