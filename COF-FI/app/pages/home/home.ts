import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListCoffeePage } from '../list-coffee/list-coffee';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  clickOk(){
    this.navCtrl.push(ListCoffeePage);
  }
}
