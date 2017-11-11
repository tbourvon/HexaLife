import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SimpleLegLift} from '../sport-workout/sport-exercises/sport-workout-leg-simpleleglift/sport-workout-leg-simpleleglift';
import {SportHomePage} from '../sport-home/sport-home';
import {AbdominalHold} from '../sport-workout/sport-exercises/sport-workout-abdos-abdominalhold/sport-workout-abdos-abdominalhold';

@Component({
  selector: 'page-sport-workout',
  templateUrl: 'sport-workout.html'
})
export class SportWorkoutPage {

  bodyPart: string;

  constructor(public navCtrl: NavController) {
    this.bodyPart="Leg";
  }

  SingleLegLift(){
    this.navCtrl.push(SimpleLegLift);
  }

  AbdominalHold30(){
    this.navCtrl.push(AbdominalHold);
  }

  swipeEvent($e){
    if($e.direction == 4)
    {
      this.navCtrl.push(SportHomePage);
    }
  }

}
