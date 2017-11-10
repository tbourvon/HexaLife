import { Component } from '@angular/core';

import { FoodHomePage } from '../food/food-home/food-home';
import { SportPage } from '../sport/sport';
import { FoodStartersPage } from '../food/food-starters/food-starters';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = FoodHomePage;
  tab1Root = SportPage;
  tab3Root = FoodStartersPage;

  constructor() {

  }
}
