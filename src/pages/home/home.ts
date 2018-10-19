import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

    constructor(public navCtrl: NavController) {

    }


    buttonClick(value) {
      console.log('Click!');
      this.navCtrl.push(DetailPage, {textoBoton1: value, textoBoton2: "Volver a Home"})
    }


}
