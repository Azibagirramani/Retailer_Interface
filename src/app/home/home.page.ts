import { Component, AfterContentInit, OnInit, ViewChild } from '@angular/core';


declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterContentInit{

 map;

 @ViewChild('mapElement') mapElement;

  constructor( ) {}

  ngOnInit(){ 
  
  }
   
  ngAfterContentInit(){

    navigator.geolocation.getCurrentPosition((location)=>{

      //getting current location
      let latitude = location.coords.latitude
      let longitude = location.coords.longitude
      this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: latitude, lng: longitude},
          zoom: 5,
          disableDefaultUI: true
        });
    }) 
  }
}
