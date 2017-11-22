import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FoodHomePage } from '../food-home/food-home';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-food-recapmenu',
  templateUrl: 'food-recapmenu.html'
})
export class FoodRecapmenuPage {

    public starters;
    public courses;
    public desserts;
    calories: any;
    carbs: any;
    fat: any;
    proteins: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.starters = this.navParams.get("starters");
    this.courses = this.navParams.get("courses");
    this.desserts = this.navParams.get("desserts");
    this.calories = this.navParams.get("calories");
    this.carbs = this.navParams.get("carbs");
    this.fat = this.navParams.get("fat");
    this.proteins = this.navParams.get("proteins");
  }

  done: boolean = false;
    valider() {
    this.done=!this.done;
    if (this.done === true) {
      let toast = this.toastCtrl.create({
        message: 'Your menu has been saved successfully !',
        duration: 3000
      });
      toast.present();
    }
    this.navCtrl.push(FoodHomePage);
  }
}
