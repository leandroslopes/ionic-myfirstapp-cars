  import { Http, Headers, RequestOptions } from '@angular/http';
  import { Component } from '@angular/core';
  import { NavController, NavParams, ToastController } from 'ionic-angular';

  @Component({
    selector: 'page-list',
    templateUrl: 'list.html'
  })
  export class ListPage {
    selectedItem: any;
    icons: string[];
    private url:string = 'http://localhost:3030/v1';
    private message: any = {};
    public car = {
      name: "", 
      price: "", 
      type: "",
      mark: ""
    };

    constructor(public navCtrl: NavController, 
                public toastCtrl: ToastController,
                public navParams: NavParams,
                public http: Http) {
      
    }

    saveCar(car) {
      let headers = new Headers();
          headers.append('Content-type', 'application/json');

      let options = new RequestOptions({headers: headers});
      this.http.post(this.url + '/cars', car, options)
        .map(res => { res.json() })
        .subscribe(data => {
          let toast = this.toastCtrl.create({
            duration: 3000,
            message: data.msg
        });
        toast.present();
        });
    }
  }
