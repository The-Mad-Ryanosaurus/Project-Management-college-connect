
import { NavController, Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  constructor(public platform: Platform, public navCtrl: NavController) { }

  openUrlLibrary() {

    this.platform.ready().then(()=>{
      let browser = new InAppBrowserObject("https://library.gmit.ie/")
    });
  }

}
