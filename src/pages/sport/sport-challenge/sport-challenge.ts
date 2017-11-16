import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-sport-challenge',
  templateUrl: 'sport-challenge.html'
})
export class SportChallengePage {
  date: any = new Date();
  day: any;
  month: any;

  months: any = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  done: boolean = false;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.day = this.date.getDate();
    this.month = this.months[this.date.getMonth()];
  }

  presentToast() {

    this.done=!this.done;

    if (this.done === true) {
      let toast = this.toastCtrl.create({
        message: 'Congratulations! Just 24 more challenges before lvl 29!',
        duration: 3000
      });
      toast.present();
    }
  }

}
