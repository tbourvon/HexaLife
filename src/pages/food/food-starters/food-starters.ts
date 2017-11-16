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
        number:0,
        emojis: ['em em-watermelon', 'em em-watermelon', 'em em-watermelon'],
        calories : 50,
        fat: 10,
        carbs: 20,
        proteins: 40,
        show: false,
        source: "assets/imgs/food/starters/starter1.jpg"
    },
    {
        title: 'Melon and Ham',
        number:0,
        emojis: ['em em-watermelon', 'em em-watermelon'],
        calories : 70,
        fat: 10,
        carbs: 20,
        proteins: 40,
        show: false,
        source: "assets/imgs/food/starters/starter2.jpg"
    },
    {
        title: 'Quiche',
        number:0,
        emojis: ['em em-pizza'],
        calories : 100,
        fat: 10,
        carbs: 20,
        proteins: 40,
        show: false,
        source: "assets/imgs/food/starters/starter3.jpg"
    },
    {
        title: 'Pizza',
        number:0,
        emojis: ['em em-pizza', 'em em-pizza'],
        calories : 160,
        fat: 10,
        carbs: 20,
        proteins: 40,
        show: false,
        source: "assets/imgs/food/starters/starter5.jpg"
    }
	];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  itemSelected(item) {
    this.navCtrl.push(FoodCoursesPage, { starters: item });
  }
}
