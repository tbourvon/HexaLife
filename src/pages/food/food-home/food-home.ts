import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodStartersPage } from '../food-starters/food-starters';
import { FoodChallengePage } from '../food-challenge/food-challenge';
//import { FoodRecipesPage } from '../food-recipes/food-recipes';
import { FoodRecipesHomePage } from '../food-recipes-home/food-recipes-home';

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

}
