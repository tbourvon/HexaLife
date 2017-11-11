import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodStartersPage } from '../food-starters/food-starters';

@Component({
  selector: 'page-food-home',
  templateUrl: 'food-home.html'
})
export class FoodHomePage {

  constructor(public navCtrl: NavController) {

  }
  dailyMenu() {
  	this.navCtrl.push(FoodStartersPage);
  }

}
