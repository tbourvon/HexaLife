import { SettingsPage } from '../pages/settings/settings';
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
import { BenchDips } from '../pages/sport/sport-workout/sport-exercises/sport-workout-arms-benchdips/sport-workout-arms-benchdips';
import {OneArmSideLaterals} from '../pages/sport/sport-workout/sport-exercises/sport-workout-shoulders-onearmsidelaterals/sport-workout-shoulders-onearmsidelaterals';
import { TabsPage } from '../pages/tabs/tabs';
import { FoodHomePage} from '../pages/food/food-home/food-home';
import { FoodChallengePage } from '../pages/food/food-challenge/food-challenge';
import { FoodStartersPage } from '../pages/food/food-starters/food-starters';
import { FoodCoursesPage } from '../pages/food/food-courses/food-courses';
import { FoodDessertsPage } from '../pages/food/food-desserts/food-desserts';
import { FoodRecapmenuPage } from '../pages/food/food-recapmenu/food-recapmenu';
import { ProfilePageHome } from '../pages/profile/profile-home/profile-home';
import { FeedPage } from '../pages/feed/feed';
import { FoodRecipesHomePage } from '../pages/food/food-recipes-home/food-recipes-home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SportHomePage,
    SportChallengePage,
    SportDatingPage,
    SportWorkoutPage,
    SimpleLegLift,
    AbdominalHold,
    BenchDips,
    OneArmSideLaterals,
    FoodHomePage,
    FoodChallengePage,
    FoodStartersPage,
    FoodCoursesPage,
    FoodDessertsPage,
    ProfilePageHome,
    FeedPage,
    FoodRecapmenuPage,
    FoodRecipesHomePage,
    TabsPage,
    SettingsPage
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
    SimpleLegLift,
    AbdominalHold,
    BenchDips,
    OneArmSideLaterals,
    FoodHomePage,
    FoodChallengePage,
    FoodStartersPage,
    FoodCoursesPage,
    FoodDessertsPage,
    ProfilePageHome,
    FeedPage,
    FoodRecapmenuPage,
    FoodRecipesHomePage,
    TabsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
