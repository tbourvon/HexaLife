import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-food-challenge',
  templateUrl: 'food-challenge.html'
})
export class FoodChallengePage {
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

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.day = this.date.getDate();
    this.month = this.months[this.date.getMonth()];
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Congratulations! ',
      duration: 300000
    });
    toast.present();
  }

}
