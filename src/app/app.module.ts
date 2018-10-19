import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { AlbumTabPage } from '../pages/album/album';
import { PerfilTabPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DetalleAlbumPage } from '../pages/detalle_album/detalleAlbum';
import { DiscosServices } from '../services/discos.services';

export const firebaseConfig = {
  apiKey: "AIzaSyC0iHzo9LYxZ8tz8ddmFIQ_eUujS_DIK8I",
  authDomain: "pocionic-fd1ef.firebaseapp.com",
  databaseURL: "https://pocionic-fd1ef.firebaseio.com",
  projectId: "pocionic-fd1ef",
  storageBucket: "pocionic-fd1ef.appspot.com",
  messagingSenderId: "872192489725"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    TabsPage,
    AlbumTabPage,
    PerfilTabPage,
    DetalleAlbumPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    TabsPage,
    AlbumTabPage,
    PerfilTabPage,
    DetalleAlbumPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DiscosServices
  ]
})
export class AppModule {}
