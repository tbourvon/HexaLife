import { Component } from '@angular/core';

import { SportHomePage } from '../sport/sport-home/sport-home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SportHomePage;
  /*tab2Root = FoodPage;
  tab3Root = FeedPage;
  tab3Root = ProfilePage;*/

  constructor() {

  }
}
