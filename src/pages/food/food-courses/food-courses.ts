import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodDessertsPage } from '../food-desserts/food-desserts';

@Component({
  selector: 'page-food-courses',
  templateUrl: 'food-courses.html'
})
export class FoodCoursesPage {

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
        title: 'Chicken and Mushrooms',
        emojis: ['em em-watermelon'],
        calories : 250,
        fat: 10, 
        carbs: 20,
        proteins: 40, 
        show: false
    },
    {
        title: 'Bolognese Pasta',
        emojis: ['em em-pizza'],
        calories : 300,
        fat: 10, 
        carbs: 20,
        proteins: 40, 
        show: false
    },
    {
        title: 'Raclette',
        emojis: ['em em-pizza', 'em em-pizza', 'em em-pizza'],
        calories : 1300,
        fat: 10, 
        carbs: 20,
        proteins: 40,
        show: false
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  itemSelected(item: string) {
    this.navCtrl.push(FoodDessertsPage);
  }

  public onInfoClick(event, index) {
  		event.stopPropagation();
        this.items[index].show = !this.items[index].show;
  }

}