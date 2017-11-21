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
        show: false
    },
    {
        title: 'Melon and Ham',
        emojis: ['em em-watermelon', 'em em-watermelon'],
        calories : 70,
        fat: 10,
        carbs: 20,
        proteins: 40,
        show: false
    },
    {
        title: 'Quiche',
        emojis: ['em em-pizza'],
        calories : 100,
        fat: 10,
        carbs: 20,
        proteins: 40,
        show: false
    },
    {
        title: 'Pizza',
        emojis: ['em em-pizza', 'em em-pizza'],
        calories : 160,
        fat: 10,
        carbs: 20,
        proteins: 40,
        show: false
    }
	];

  selectedStarters = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  next() {
    this.navCtrl.push(FoodCoursesPage, { starters: this.selectedStarters });
  }

  public onInfoClick(event, index) {
  		event.stopPropagation();
        this.items[index].show = !this.items[index].show;
  }

  minus(item) {
    console.log(item);

  }

  plus(item) {
    item.number++;
  }


}
