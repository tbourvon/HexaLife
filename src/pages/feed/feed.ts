import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';


@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  pushSettings() {
    this.navCtrl.push(SettingsPage);
  }

  showConfirm(sn: string) {
    let confirm = this.alertCtrl.create({
      title: 'Connect to ' + sn,
      message: 'The app would like to access ' + sn + '. Do you agree?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
          }
        },
        {
          text: 'Agree',
          handler: () => {
          }
        }
      ]
    });
    confirm.present();
  }

}
