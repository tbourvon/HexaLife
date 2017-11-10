import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodHomePage } from '../food-home/food-home';

@Component({
  selector: 'page-food-starters',
  templateUrl: 'food-starters.html'
})
export class FoodStartersPage {

	startersRoot = FoodHomePage;

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

  constructor(public navCtrl: NavController) {

  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  public onInfoClick(event, index) {
  		event.stopPropagation();
        this.items[index].show = !this.items[index].show;
  }

}
