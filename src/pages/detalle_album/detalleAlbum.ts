import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DiscosServices } from "../../services/discos.services";

@Component({
    selector: 'page-detalle-album',
    templateUrl: 'detalleAlbum.html'
  })
  
export class DetalleAlbumPage {

    disco: any;
    textoBoton: string = '';

    constructor(public navCtrl: NavController, public navParams: NavParams, public discoService: DiscosServices) {
        this.disco = navParams.get('disco') || {};
        this.textoBoton = navParams.get('textoBoton');
    }


    guardarDisco() {
        if(this.textoBoton == 'Modificar') {
            this.discoService.editDisco(this.disco);
        } else {   
            this.disco.id = Date.now();
            this.discoService.addDisco(this.disco);
        }
        this.navCtrl.pop();
    }





}