import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SportHomePage} from '../../../sport-home/sport-home';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-sport-workout-arms-benchdips',
  templateUrl: 'sport-workout-arms-benchdips.html'
})

export class BenchDips {

  constructor(public navCtrl: NavController,  public toastCtrl: ToastController) {

  }
  done: boolean = false;

  valider() {
    this.done=!this.done;
    if (this.done === true) {
      let toast = this.toastCtrl.create({
        message: 'Congratulations! Your arms are in fire !',
        duration: 3000
      });
      toast.present();
    }
  }

}
