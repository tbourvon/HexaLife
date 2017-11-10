import { Component } from '@angular/core';

import { SportHomePage } from '../sport/sport-home/sport-home';
import { FoodHomePage } from '../food/food-home/food-home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SportHomePage;
  tab2Root = FoodHomePage;

  constructor() {

  }
}
