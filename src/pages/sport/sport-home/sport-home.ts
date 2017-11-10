import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SportChallengePage } from '../sport-challenge/sport-challenge';
import { SportDatingPage } from '../sport-dating/sport-dating';
import { SportWorkoutPage } from '../sport-workout/sport-workout';

@Component({
  selector: 'page-sport-home',
  templateUrl: 'sport-home.html'
})
export class SportHomePage {
  constructor(public navCtrl: NavController) {

  }

  sportChallenge() {
    this.navCtrl.push(SportChallengePage)
  }
  sportDating() {
    this.navCtrl.push(SportDatingPage)
  }
  sportWorkout() {
    this.navCtrl.push(SportWorkoutPage)
  }
}
