import { Component } from '@angular/core';

import { FoodPage } from '../food/food-home/food-home';
import { SportPage } from '../sport/sport';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = FoodHomePage;
  tab1Root = SportPage;

  constructor() {

  }
}
