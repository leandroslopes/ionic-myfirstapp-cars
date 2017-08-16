import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  
  public car: any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public http: Http ) {

            let url = this.navParams.get('api_url');
            let car_id = this.navParams.get('car_id');
            
            this.http.get(url + '/cars/' + car_id)
      .map(res => res.json())
      .subscribe(data => {
        this.car = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Mensagem!',
      subTitle: 'Você Logou!',
      buttons: ['OK']
    });
    alert.present();
  }
}
