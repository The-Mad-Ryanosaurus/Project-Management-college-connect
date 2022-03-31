import { NavController, Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})



export class Tab1Page {

  constructor(public platform: Platform, public navCtrl: NavController) { }

  openUrlGMIT() {

    this.platform.ready().then(()=>{
      let browser = new InAppBrowserObject("https://studenthub.gmit.ie/")
    });
  }

}