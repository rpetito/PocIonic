import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";


@Injectable()
export class DiscosServices {

    constructor(public afDB: AngularFireDatabase) {

    }


    public getDiscos() {
        return this.afDB.list("/discos/");
    }

    public getDisco(discoID) {
        return this.afDB.object("discos/" + discoID);
    }

    public addDisco(disco) {
        this.afDB.database.ref("/discos/" + disco.id).set(disco);
    }

    public editDisco(disco) {
        this.afDB.database.ref("/discos/" + disco.id).update(disco);
    }

    public removeDisco(disco) {
        return this.afDB.database.ref("/discos/" + disco.id).remove();
    }
    


}