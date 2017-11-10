import { Component } from '@angular/core';

import { SportHomePage } from '../sport/sport-home/sport-home';
import { FoodHomePage } from '../food/food-home/food-home';
import { FoodStartersPage } from '../food/food-starters/food-starters';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SportHomePage;
  tab2Root = FoodHomePage;
  tab3Root = FoodStartersPage;

  constructor() {

  }
}
