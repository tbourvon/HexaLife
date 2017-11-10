import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LegExercise } from "../sport-workout-leg/sport-workout-leg"
import {SimpleLegLift} from '../sport-workout-leg-simpleleglift/sport-workout-leg-simpleleglift';

@Component({
  selector: 'page-sport-workout',
  templateUrl: 'sport-workout.html'
})
export class SportWorkoutPage {

  constructor(public navCtrl: NavController) {
  }

  SingleLegLift(){
    this.navCtrl.push(SimpleLegLift);
  }

}
