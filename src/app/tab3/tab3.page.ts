import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public platform: Platform, public navCtrl: NavController) { }

  openUrlTimetable() {

    this.platform.ready().then(()=>{
      let browser = new InAppBrowserObject("https://timetable.gmit.ie/")
    });
  }

}