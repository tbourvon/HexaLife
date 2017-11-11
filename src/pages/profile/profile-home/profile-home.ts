import { Component } from '@angular/core';


@Component({
  selector: 'profile-home',
  templateUrl: 'profile-home.html'
})
export class ProfilePageHome {

  slides = [
    {
      title: "Level: Max",
      image: "../assets/imgs/championcup.png",
      description: "You are a veteran. No one can stop you!",
      text: "You are a machine! You've hit the 300km bar",
    },
    {
    
      title: "Sport",
      description: "Statistics",
    
    },
    {
      title: "Nutrition",
      description: "Statistics",
    }
  ];


}


