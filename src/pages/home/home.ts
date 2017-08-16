import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';

import { TestPage } from '../test/test';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cars: Array<{}>;
  private url: string = 'http://localhost:3030/v1'; 

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get(this.url + '/cars')
      .map(res => res.json())
      .subscribe(data => {
        this.cars = data;
      });
  }

  getCarInfo(id) {
    this.navCtrl.push(TestPage, 
      {
        'car_id': id,
        'api_url': this.url
      });
  }
}
