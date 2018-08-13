import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListaAgendamentosPage } from '../pages/lista-agendamentos/lista-agendamentos';
import { Nav } from 'ionic-angular';
@Component({
  selector:'myapp',
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) public nav: Nav;

  public pages = [
    {
      title: 'Agendamentos',
      component: ListaAgendamentosPage.name,
      icon: 'calendar'
    }
  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goTo(page) {
    this.nav.push(page);
  }
}

