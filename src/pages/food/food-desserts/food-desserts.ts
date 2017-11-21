import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FoodRecapmenuPage } from '../food-recapmenu/food-recapmenu';

@Component({
  selector: 'page-food-desserts',
  templateUrl: 'food-desserts.html'
})
export class FoodDessertsPage {

	items = [
    {
        title: 'Fruit',
        emojis: ['em em-watermelon', 'em em-watermelon', 'em em-watermelon'],
        calories : 40,
        fat: 10,
        carbs: 20,
        proteins: 40,
        show: false,
        source: "assets/imgs/food/desserts/dessert1.jpg"
    },
    {
        title: 'Yoghurt',
        emojis: ['em em-watermelon', 'em em-watermelon'],
        calories : 65,
        fat: 10,
        carbs: 20,
        proteins: 40,
        show: false,
        source: "assets/imgs/food/desserts/dessert2.jpg"
    },
    {
        title: 'Donuts',
        emojis: ['em em-pizza', 'em em-pizza', 'em em-pizza'],
        calories : 250,
        fat: 10,
        carbs: 20,
        proteins: 40,
        show: false,
        source: "assets/imgs/food/desserts/dessert3.png"
    }
	];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navParams = navParams;
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
    this.navCtrl.push(FoodRecapmenuPage,   {
        starters: this.navParams.get("starters"),
        courses: this.navParams.get("courses"),
        desserts: item,
        calories: (this.navParams.get("calories") + calories),
        carbs: (this.navParams.get("carbs") + carbs),
        fat: (this.navParams.get("fat") + fat),
        proteins: (this.navParams.get("proteins") + proteins)
      });
  }

}
