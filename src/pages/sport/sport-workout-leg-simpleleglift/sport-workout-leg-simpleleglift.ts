import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-sport-workout-leg-simpleleglift',
  templateUrl: 'sport-workout-leg-simpleleglift.html'
})
export class SimpleLegLift {

  constructor(public navCtrl: NavController) {

  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
