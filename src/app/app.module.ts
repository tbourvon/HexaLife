import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SportHomePage } from '../pages/sport/sport-home/sport-home';
import { SportChallengePage } from '../pages/sport/sport-challenge/sport-challenge';
import { SportDatingPage } from '../pages/sport/sport-dating/sport-dating';
import { SportWorkoutPage } from '../pages/sport/sport-workout/sport-workout';
import { SimpleLegLift } from '../pages/sport/sport-workout/sport-exercises/sport-workout-leg-simpleleglift/sport-workout-leg-simpleleglift';
import { AbdominalHold } from '../pages/sport/sport-workout/sport-exercises/sport-workout-abdos-abdominalhold/sport-workout-abdos-abdominalhold';

import { ProfilePageHome } from '../pages/profile/profile-home/profile-home';

import { TabsPage } from '../pages/tabs/tabs';
import { FoodHomePage} from '../pages/food/food-home/food-home';
import { FoodChallengePage } from '../pages/food/food-challenge/food-challenge';
import { FoodStartersPage } from '../pages/food/food-starters/food-starters';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ProfilePageHome,            
    SportHomePage,
    SportChallengePage,
    SportDatingPage,
    SportWorkoutPage,
    SimpleLegLift,
    AbdominalHold,
    FoodHomePage,
    FoodChallengePage,
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
    ProfilePageHome,            
    SportHomePage,
    SportChallengePage,
    SportDatingPage,
    SportWorkoutPage,
    SimpleLegLift,
    AbdominalHold,
    FoodHomePage,
    FoodChallengePage,
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