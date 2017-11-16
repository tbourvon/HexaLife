import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FoodHomePage } from '../food-home/food-home';

@Component({
  selector: 'page-food-recapmenu',
  templateUrl: 'food-recapmenu.html'
})
export class FoodRecapmenuPage {

    public starters;
    public courses;
    public desserts;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.starters = this.navParams.get("starters");
    this.courses = this.navParams.get("courses");
    this.desserts = this.navParams.get("desserts");
  }

  valider() {
    let alert = this.alertCtrl.create({
      subTitle: 'Menu saved successfully!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(FoodHomePage);
  }

}
