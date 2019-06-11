import { Component } from '@angular/core';

import { Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ResolveEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public showSidebar: boolean;
  public loading: boolean;
  public currentRoute: string;

  public appPages = [
    {
      title: 'Home',
      icon: 'ios-home',
      url: '/'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public events: Events
  ) {
    this.initializeApp();

    this.events.subscribe("showSidebar", (shouldShowSidebar) => {
      this.showSidebar = shouldShowSidebar;
    });

    this.events.subscribe("loading", (isLoading) => {
      this.loading = isLoading;
    });

    // React to router events
    router.events.subscribe((val) => {
      if (val instanceof ResolveEnd) {
        this.currentRoute = val.url;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ionViewWillUnload() {
    this.events.unsubscribe("showSidebar");
    this.events.unsubscribe("loading");
  }

  logout() {
    
  }
}
