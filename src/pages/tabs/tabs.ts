import { Component } from '@angular/core';
import { SportHomePage } from '../sport/sport-home/sport-home';
import { FoodHomePage } from '../food/food-home/food-home';
import { ProfilePageHome } from '../profile/profile-home/profile-home';
import { FeedPage } from '../feed/feed';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = SportHomePage;
  tab2Root = FoodHomePage;
  tab3Root = FeedPage;
  tab4Root = ProfilePageHome;
  constructor(public navCtrl: NavController) {}

}
