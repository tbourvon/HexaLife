import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SportHomePage} from '../../../sport-home/sport-home';
import { ToastController } from 'ionic-angular';
import { SportWorkoutPage } from '../../sport-workout';

@Component({
  selector: 'page-sport-workout-leg-simpleleglift',
  templateUrl: 'sport-workout-leg-simpleleglift.html'
})
export class SimpleLegLift {

  constructor(public navCtrl: NavController,  public toastCtrl: ToastController) {

  }
  done: boolean = false;

    valider() {
    this.done=!this.done;
    if (this.done === true) {
      let toast = this.toastCtrl.create({
        message: 'Congratulations! Now you can climb a mountain !',
        duration: 3000
      });
      toast.present();
    }
    this.navCtrl.push(SportWorkoutPage);
  }

}
