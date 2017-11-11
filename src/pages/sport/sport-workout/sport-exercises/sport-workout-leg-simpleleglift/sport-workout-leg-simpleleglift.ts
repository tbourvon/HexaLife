import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SportHomePage} from '../../../sport-home/sport-home';

@Component({
  selector: 'page-sport-workout-leg-simpleleglift',
  templateUrl: 'sport-workout-leg-simpleleglift.html'
})
export class SimpleLegLift {

  constructor(public navCtrl: NavController) {

  }

  swipeEvent($e){
    if($e.direction == 4)
    {
      this.navCtrl.push(SportHomePage);      
    }
  }

}