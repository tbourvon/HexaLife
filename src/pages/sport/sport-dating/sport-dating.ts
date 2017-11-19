import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { SportDatingChatPage } from './sport-dating-chat/sport-dating-chat';

declare var google;

@Component({
  selector: 'page-sport-dating',
  templateUrl: 'sport-dating.html'
})
export class SportDatingPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {
      
           let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      
           let mapOptions = {
             center: latLng,
             zoom: 15,
             mapTypeId: google.maps.MapTypeId.ROADMAP
           }
      
           this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

           this.addPerson('Jean-Pierre');
      
         }, (err) => {
           console.log(err);
         });
 
  }

  addPerson(name : string){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let infoWindow = new google.maps.InfoWindow({
      content: name
    });

    infoWindow.open(this.map, marker);

    this.addInfoWindow(marker, name);

   }

   addInfoWindow(marker, name){

     google.maps.event.addListener(marker, 'click', () => {
       this.navCtrl.push(SportDatingChatPage, {toUserId: '210000198410281948', toUserName: 'Jean-Pierre'});
     });
    
   }

}
