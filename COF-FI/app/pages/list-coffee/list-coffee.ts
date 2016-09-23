import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ListCoffeePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/list-coffee/list-coffee.html',
})
export class ListCoffeePage {
 items:any = [
    {name: "iced coffee", type: 1},
    {name: "black coffee", type: 1},
    {name: "cappuccino", type: 3},
    {name: "macchiato", type: 2},
    {name: "americano", type: 1},
  ]
  constructor(private navCtrl: NavController) {

  }
  addNewCoffee(newCoffeName){
    let newCoffeeObject = {name : newCoffeName};
    this.items.push(newCoffeeObject);
  }
  popUp(selectedPokemon){
    alert(selectedPokemon.name + "เราเลือกคุณ");
  }

}
