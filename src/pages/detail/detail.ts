import { Component } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";
import { HomePage } from "../home/home";

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html'
  })


export class DetailPage {

    textoBoton1 : string = '';
    textoBoton2 : string = '';


    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.textoBoton1 = this.navParams.get('textoBoton1');
        this.textoBoton2 = this.navParams.get('textoBoton2');
    }

    irAtras() {
        this.navCtrl.pop();
    }

    irAHomeComoRoot() {
        this.navCtrl.setRoot(HomePage);
    }

}