import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { FoodPage } from '../food/food-home/food-home';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = FoodHomePage;

  constructor() {

  }
}
