import { Component } from "@angular/core";
import { HomePage } from "../home/home";
import { AlbumTabPage } from "../album/album";
import { PerfilTabPage } from "../perfil/perfil";

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})


export class TabsPage {

    homeTab = HomePage;
    albumTab = AlbumTabPage;
    perfilTab = PerfilTabPage;


    constructor() {

    }


}

