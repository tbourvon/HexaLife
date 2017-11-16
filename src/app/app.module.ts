import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SportHomePage } from '../pages/sport/sport-home/sport-home';
import { SportChallengePage } from '../pages/sport/sport-challenge/sport-challenge';
import { SportDatingPage } from '../pages/sport/sport-dating/sport-dating';
import { SportDatingChatPage } from '../pages/sport/sport-dating/sport-dating-chat/sport-dating-chat';
import { SportWorkoutPage } from '../pages/sport/sport-workout/sport-workout';

import { TabsPage } from '../pages/tabs/tabs';
import { FoodHomePage} from '../pages/food/food-home/food-home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { ChatService } from '../providers/chat-service';
import { EmojiProvider } from '../providers/emoji';
import { EmojiPickerComponentModule } from '../components/emoji-picker/emoji-picker.module';
import { RelativeTime } from '../pipes/relative-time';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    SportHomePage,
    SportChallengePage,
    SportDatingPage,
    SportDatingChatPage,
    SportWorkoutPage,
    FoodHomePage,
    TabsPage,
    RelativeTime
  ],
  imports: [
    BrowserModule,
    HttpModule,
    EmojiPickerComponentModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SportHomePage,
    SportChallengePage,
    SportDatingPage,
    SportDatingChatPage,
    SportWorkoutPage,
    FoodHomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    ChatService,
    EmojiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
