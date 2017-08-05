import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';

import {} from '@types/googlemaps';
import {MapsService} from "./maps.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // Html elements ref
  @ViewChild('mapContainer') mapContainer: ElementRef;
  @ViewChild('inputText') inputContainer: ElementRef;

  // googleMaps consts
  public map: google.maps.Map;
  public marker: google.maps.Marker;
  public autocomplete: google.maps.places.Autocomplete;


  // ngZone (TODO)
  private ngZone: NgZone;

  // onInit map coordinates
  public latCenterOnInitMap = 32.02379;
  public lngCenterOnInitMap = 34.75185;
  public jsonLog;
  public arrayOfSnifs = [];
  gotData: boolean = false;

  constructor(private mapsService: MapsService) {

  }

  /**
   * Function for OnInit
   */
  ngOnInit() {
    // Test for Json
    this.jsonLog = this.mapsService.getFromJson();
   // console.log(this.jsonLog);

    // Init
    this.initMap();
    this.autocompleteFunction();
    this.autocomplete.addListener('place_changed', () => {
      this.addMarker();
    });
  }

  /**
   * Init of the map onInit
   */
  initMap() {
    const latlng = new google.maps.LatLng(this.latCenterOnInitMap, this.lngCenterOnInitMap);
    this.map = new google.maps.Map(this.mapContainer.nativeElement, {
      center: latlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    this.marker = new google.maps.Marker({
      position: latlng,
      map: this.map
    });
  };

  /**
   * AutoComplete Function
   */
  autocompleteFunction() {
    this.autocomplete = new google.maps.places.Autocomplete(this.inputContainer.nativeElement, {
      types: ['address']
    });
  }

  /**
   * Adding Marker to map
   */
  addMarker() {
    this.marker.setMap(null);
    let place: google.maps.places.PlaceResult = this.autocomplete.getPlace();
    console.log(place);
    this.marker = new google.maps.Marker({
      position: place.geometry.location,
      map: this.map
    });
    console.log(this.jsonLog);
    this.addMarkersToMapFromArray();
  }

  addMarkerFromJson(markerFromJson) {

    const latlng = new google.maps.LatLng(markerFromJson, markerFromJson);

    this.marker = new google.maps.Marker({
      position: markerFromJson
    });
  }

  //TODO add marker without autocomplete
    addMarkersToMapFromArray() {

      //this.jsonLog = this.mapsService.getFromJson();
      this.jsonLog.forEach((item) => {
        item.branches.forEach((snif) => {
          snif.name = item.name;
          const latlng = new google.maps.LatLng(snif.lat, snif.lng);
          this.marker = new google.maps.Marker({
            position: latlng,
            map: this.map,
            label: item.name
          });
       //   console.log(snif);
          this.arrayOfSnifs.push(snif);
        });
      });
      // Test

    console.log(this.arrayOfSnifs.length);
    console.log(this.gotData);
    }
}
