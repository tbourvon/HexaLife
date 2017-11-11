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
        show: false
    },
    {
        title: 'Yoghurt',
        emojis: ['em em-watermelon', 'em em-watermelon'],
        calories : 65,
        fat: 10, 
        carbs: 20,
        proteins: 40, 
        show: false
    },
    {
        title: 'Donuts',
        emojis: ['em em-pizza', 'em em-pizza', 'em em-pizza'],
        calories : 250,
        fat: 10, 
        carbs: 20,
        proteins: 40, 
        show: false
    }
	];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemSelected(item: string) {
    this.navCtrl.push(FoodRecapmenuPage, { starters: this.navParams.get("starters"), 
    courses: this.navParams.get("courses"), 
    desserts: item });
  }

  public onInfoClick(event, index) {
  		event.stopPropagation();
        this.items[index].show = !this.items[index].show;
  }

}
