import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodStartersPage } from '../food-starters/food-starters';
import { FoodChallengePage } from '../food-challenge/food-challenge';
import { FoodHomePage} from '../food-home/food-home';
@Component({
  selector: 'page-food-recipes-home',
  templateUrl: 'food-recipes-home.html'
})
export class FoodRecipesHomePage {
  bodyPart: string;
  constructor(public navCtrl: NavController) {
    this.bodyPart = "Healthy";
  }

  
    swipeEvent($e) {
      if ($e.direction == 4) {
        this.navCtrl.push(FoodHomePage);
      }
    }
  
  }
  

  
  


