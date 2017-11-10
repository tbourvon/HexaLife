import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LegExercise } from "../sport-workout-leg/sport-workout-leg"

@Component({
  selector: 'page-sport-workout',
  templateUrl: 'sport-workout.html'
})
export class SportWorkoutPage {

  constructor(public navCtrl: NavController) {

  }

  items = [
    'Legs & Buttocks',
    'Abdos',
    'Arms',
    'Shoulders'
    ];

  itemSelected(item: string) {
    
    console.log("Selected Item", item);
    
    if(item == "Legs & Buttocks")
    {
        this.navCtrl.push(LegExercise);
    }
  }

}
