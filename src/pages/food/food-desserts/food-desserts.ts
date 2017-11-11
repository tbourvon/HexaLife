import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {

  }

  itemSelected(item: string) {
  }

  public onInfoClick(event, index) {
  		event.stopPropagation();
        this.items[index].show = !this.items[index].show;
  }

}
