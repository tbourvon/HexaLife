import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {
    this.day = this.date.getDate();
    this.month = this.months[this.date.getMonth()];
  }

}
