import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SportHomePage } from '../pages/sport/sport-home/sport-home';
import { SportChallengePage } from '../pages/sport/sport-challenge/sport-challenge';
import { SportDatingPage } from '../pages/sport/sport-dating/sport-dating';
import { SportWorkoutPage } from '../pages/sport/sport-workout/sport-workout';
import {LegExercise} from '../pages/sport/sport-workout-leg/sport-workout-leg';
import {SimpleLegLift} from '../pages/sport/sport-workout-leg-simpleleglift/sport-workout-leg-simpleleglift';

import { TabsPage } from '../pages/tabs/tabs';
import { FoodHomePage} from '../pages/food/food-home/food-home';
import { FoodStartersPage } from '../pages/food/food-starters/food-starters';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SportHomePage,
    SportChallengePage,
    SportDatingPage,
    SportWorkoutPage,
    LegExercise,
    SimpleLegLift,
    FoodHomePage,
    FoodStartersPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SportHomePage,
    SportChallengePage,
    SportDatingPage,
    SportWorkoutPage,
    LegExercise,
    SimpleLegLift,
    FoodHomePage,
    FoodStartersPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
