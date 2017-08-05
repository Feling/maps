import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Supermarket} from "./supermarket";

import 'rxjs/Rx';

@Injectable()
export class MapsService {

  private supermarket: Supermarket;
  private arrayOfSuper = [];

  private jsonFileUrl: string = '/assets/json/markets.json';

  public map: google.maps.Map;

  constructor(private http: Http) {
  }

  //TODO change the push method to interface
  public getFromJson() {
    this.http.get(this.jsonFileUrl)
      .flatMap(res => res.json())
      .subscribe((data) => {
      this.arrayOfSuper.push(data);
      });
    return this.arrayOfSuper;
  }

 public distanceCalc(lat1, lon1, lat2, lon2) {
    const p = 0.017453292519943295;    // Math.PI / 180
    const c = Math.cos;
    let a = 0.5 - c((lat2 - lat1) * p)/2 +
      c(lat1 * p) * c(lat2 * p) *
      (1 - c((lon2 - lon1) * p))/2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }
}

