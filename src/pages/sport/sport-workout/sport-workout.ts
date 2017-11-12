import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SimpleLegLift } from '../sport-workout/sport-exercises/sport-workout-leg-simpleleglift/sport-workout-leg-simpleleglift';
import { SportHomePage } from '../sport-home/sport-home';
import { AbdominalHold } from '../sport-workout/sport-exercises/sport-workout-abdos-abdominalhold/sport-workout-abdos-abdominalhold';

@Component({
  selector: 'page-sport-workout',
  templateUrl: 'sport-workout.html'
})
export class SportWorkoutPage {

  bodyPart: string;

  legExerciseList = [
    {
      title: 'Single Leg Lift',
      emojis: ['em em-zap'],
      repetitions: '30 repetitions',
      show: false
    },
    {
      title: 'Side Lunge',
      emojis: ['em em-zap'],
      repetitions: '15 repetitions',
      show: false
    },
    {
      title: 'Double Leg Lift',
      emojis: ['em em-zap', 'em em-zap'],
      repetitions: '20 repetitions',
      show: false
    },
    {
      title: 'Squat Jump',
      emojis: ['em em-zap', 'em em-zap'],
      repetitions: '10 repetitions',
      show: false
    },
    {
      title: 'Leg Pull Front',
      emojis: ['em em-zap', 'em em-zap','em em-zap'],
      repetitions: '20 repetitions',
      show: false
    },
    {
      title: 'Scissor Box Jump',
      emojis: ['em em-zap', 'em em-zap','em em-zap'],
      repetitions: '20 repetitions',
      show: false
    }
  ];

  abdosExercices = [
    {
      title: 'Abdominal hold - Easy',
      emojis: ['em em-zap'],
      repetitions: '30 seconds',
      show: false
    },
    {
      title: 'Side crunch',
      emojis: ['em em-zap'],
      repetitions: '10 repetitions',
      show: false
    },
    {
      title: 'Abdominal hold - Intermediate',
      emojis: ['em em-zap', 'em em-zap'],
      repetitions: '60 seconds',
      show: false
    },
    {
      title: 'Abdominal hold - Hard',
      emojis: ['em em-zap', 'em em-zap','em em-zap'],
      repetitions: '90 seconds',
      show: false
    }
  ];

  armsExercices = [
    {
      title: 'Bench Dips',
      emojis: ['em em-zap'],
      repetitions: '8 repetitions',
      show: false
    },
    {
      title: 'Barbel Curl',
      emojis: ['em em-zap', 'em em-zap'],
      repetitions: '10 repetitions',
      show: false
    },
    {
      title: 'Triceps pushdown',
      emojis: ['em em-zap', 'em em-zap'],
      repetitions: '25 repetitions',
      show: false
    },
    {
      title: 'Concentration Curl',
      emojis: ['em em-zap', 'em em-zap','em em-zap'],
      repetitions: '12 repetitions',
      show: false
    }
  ];

  shouldersExercices = [
    {
      title: 'One-Arm Side Laterals',
      emojis: ['em em-zap'],
      repetitions: '12 repetitions',
      show: false
    },
    {
      title: 'Lying Rear Delt Raise',
      emojis: ['em em-zap', 'em em-zap'],
      repetitions: '10 repetitions',
      show: false
    },
    {
      title: 'Pushups',
      emojis: ['em em-zap', 'em em-zap'],
      repetitions: '20 repetitions',
      show: false
    },
    {
      title: 'Reverse Flyes',
      emojis: ['em em-zap', 'em em-zap','em em-zap'],
      repetitions: '15 repetitions',
      show: false
    }
  ];



  constructor(public navCtrl: NavController) {
    this.bodyPart = "Leg";
  }


  itemSelected(itemTitle)
  {
    if(itemTitle == "Single Leg Lift")
    {
      this.navCtrl.push(SimpleLegLift);
    }
    else if(itemTitle == "Abdominal hold - Easy")
    {
      this.navCtrl.push(AbdominalHold);
    }
  }

  swipeEvent($e) {
    if ($e.direction == 4) {
      this.navCtrl.push(SportHomePage);
    }
  }

}
