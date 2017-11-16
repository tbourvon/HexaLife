import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SportHomePage} from '../../../sport-home/sport-home';

@Component({
  selector: 'page-sport-workout-arms-benchdips',
  templateUrl: 'sport-workout-arms-benchdips.html'
})

export class BenchDips {

  constructor(public navCtrl: NavController) {

  }

  swipeEvent($e){
    /*if($e.direction == 4)
    {
      this.navCtrl.push(SportHomePage);
    }*/
  }

}
