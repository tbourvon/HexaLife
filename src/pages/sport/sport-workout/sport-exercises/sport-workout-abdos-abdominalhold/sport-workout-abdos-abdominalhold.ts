import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SportHomePage} from '../../../sport-home/sport-home';

@Component({
  selector: 'page-sport-workout-abdos-abdominalhold',
  templateUrl: 'sport-workout-abdos-abdominalhold.html'
})

export class AbdominalHold {

  constructor(public navCtrl: NavController) {

  }

  swipeEvent($e){
    /*if($e.direction == 4)
    {
      this.navCtrl.push(SportHomePage);
    }*/
  }

}
