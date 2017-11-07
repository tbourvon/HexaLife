import { Component } from '@angular/core';

import { SportPage } from '../sport/sport';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SportPage;
  /*tab2Root = FoodPage;
  tab3Root = FeedPage;
  tab3Root = ProfilePage;*/

  constructor() {

  }
}
