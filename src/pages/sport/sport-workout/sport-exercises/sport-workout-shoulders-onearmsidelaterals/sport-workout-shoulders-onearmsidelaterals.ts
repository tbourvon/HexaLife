import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SportHomePage} from '../../../sport-home/sport-home';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-sport-workout-shoulders-onearmsidelaterals',
  templateUrl: 'sport-workout-shoulders-onearmsidelaterals.html'
})

export class OneArmSideLaterals {

  constructor(public navCtrl: NavController,  public toastCtrl: ToastController) {

  }
  done: boolean = false;
    valider() {
    this.done=!this.done;
    if (this.done === true) {
      let toast = this.toastCtrl.create({
        message: 'Congratulations! Your shoulder will be bigger than before !',
        duration: 3000
      });
      toast.present();
    }
  }

}
