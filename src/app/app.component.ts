import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { AplicacionPage } from '../pages/aplicacion/aplicacion';
import { SignupPage } from '../pages/signup/signup';
import { AlertasPage } from '../pages/alertas/alertas';
import { GraficosPage } from '../pages/graficos/graficos';


import { CameraTabDefaultPagePage } from '../pages/camera-tab-default-page/camera-tab-default-page';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = CameraTabDefaultPagePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToAplicacion(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AplicacionPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }goToAlertas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AlertasPage);
  }goToGraficos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GraficosPage);
  }
}
