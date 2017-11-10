import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SimpleLegLift} from '../sport-workout-leg-simpleleglift/sport-workout-leg-simpleleglift';

@Component({
  selector: 'page-sport-workout-leg',
  templateUrl: 'sport-workout-leg.html'
})
export class LegExercise {

  constructor(public navCtrl: NavController) {

  }

  SingleLegLift(){
    this.navCtrl.push(SimpleLegLift);
  }

}
