import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodStartersPage } from '../food-starters/food-starters';
import { FoodChallengePage } from '../food-challenge/food-challenge';
import { FoodRecipesHomePage } from '../food-recipes-home/food-recipes-home';
import { SettingsPage } from '../../settings/settings';


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

  FoodChallenge() {
    this.navCtrl.push(FoodChallengePage);
  }

  recipesHome() {
    this.navCtrl.push(FoodRecipesHomePage);  
  }  

  pushSettings() {
    this.navCtrl.push(SettingsPage);
  }
  
}
