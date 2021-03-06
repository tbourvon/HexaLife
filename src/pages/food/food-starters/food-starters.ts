import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodCoursesPage } from '../food-courses/food-courses';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-food-starters',
  templateUrl: 'food-starters.html'
})
export class FoodStartersPage {

	items = [
    {
        title: 'Mixed Salad',
        emojis: ['em em-watermelon', 'em em-watermelon', 'em em-watermelon'],
        calories : 50,
        fat: 10,
        carbs: 20,
        proteins: 40,
        show: false,
        source : "assets/imgs/food/starters/starter1.jpg"
    },
    {
        title: 'Melon and Ham',
        emojis: ['em em-watermelon', 'em em-watermelon'],
        calories : 70,
        fat: 10,
        carbs: 20,
        proteins: 40,
        show: false,
        source : "assets/imgs/food/starters/starter2.jpg"
    },
    {
        title: 'Quiche',
        emojis: ['em em-pizza'],
        calories : 100,
        fat: 10,
        carbs: 20,
        proteins: 40,
        show: false,
        source : "assets/imgs/food/starters/starter3.jpg"
    },
    {
        title: 'Pizza',
        emojis: ['em em-pizza', 'em em-pizza'],
        calories : 160,
        fat: 10,
        carbs: 20,
        proteins: 40,
        show: false,
        source : "assets/imgs/food/starters/starter4.jpg"
    }
	];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  itemSelected(item: string) {
    var calories;
    var carbs;
    var fat;
    var proteins;
    for (let itemSelected of this.items) {
      if (itemSelected.title == item) {
        calories = itemSelected.calories;
        carbs = itemSelected.carbs;
        fat = itemSelected.fat;
        proteins = itemSelected.proteins;
      }
    }
    this.navCtrl.push(FoodCoursesPage, {
      starters: item,
      calories: calories,
      carbs: carbs,
      fat: fat,
      proteins: proteins
    });
  }

}
