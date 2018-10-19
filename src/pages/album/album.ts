import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";
import { DetalleAlbumPage } from "../detalle_album/detalleAlbum";
import { DiscosServices } from "../../services/discos.services";


@Component({
    selector: 'page-albumTab',
    templateUrl: 'album.html'
})

export class AlbumTabPage {

    discos: any = [];

    constructor(public navCtrl: NavController, public alertController: AlertController, public discoService: DiscosServices) {
        this.discoService.getDiscos().valueChanges().subscribe(
            (discosDB) => this.discos = discosDB 
        );
    }

    verDetalleDisco(disco) {
        let textoBoton = (disco == null ? 'Agregar' : 'Modificar');
        this.navCtrl.push(DetalleAlbumPage, {disco: disco, textoBoton: textoBoton});
    }

    eliminarDisco(disco) {

        const confirmDialog = this.alertController.create({
            title: 'Eliminar',
            message: 'Seguro que quieres eliminar el disco ' + disco.album + '?',
            buttons: [
                {
                    text: 'No, cancelar'
                },
                {
                    text: 'Si, eliminar',
                    handler: () => {
                        this.discoService.removeDisco(disco);
                    }
                }
            ]
        })
        confirmDialog.present();

    }

}