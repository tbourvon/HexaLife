import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodChallengePage } from '../food-challenge/food-challenge';

@Component({
  selector: 'page-food-home',
  templateUrl: 'food-home.html'
})
export class FoodHomePage {

  constructor(public navCtrl: NavController) {

  }

  FoodChallenge() {
    this.navCtrl.push(FoodChallengePage);
  }

}
