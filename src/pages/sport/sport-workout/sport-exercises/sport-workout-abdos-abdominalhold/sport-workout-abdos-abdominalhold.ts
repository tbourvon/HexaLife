import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SportHomePage} from '../../../sport-home/sport-home';
import { ToastController } from 'ionic-angular';
import { SportWorkoutPage } from '../../sport-workout';

@Component({
  selector: 'page-sport-workout-abdos-abdominalhold',
  templateUrl: 'sport-workout-abdos-abdominalhold.html'
})

export class AbdominalHold {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }
  done: boolean = false;

  valider() {

    this.done=!this.done;

    if (this.done === true) {
      let toast = this.toastCtrl.create({
        message: 'Congratulations! Your abs are rock hard !',
        duration: 3000
      });
      toast.present();
    }
    this.navCtrl.push(SportWorkoutPage);
  }
}
