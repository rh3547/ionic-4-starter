import { Component } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';
import { Events, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public loading: boolean = true;

  constructor(
    private events: Events,
    public ModalController: ModalController
  ) {}

  ionViewDidEnter() {
    this.events.publish('showSidebar', true);
    this.events.publish('loading', false);
    this.loading = false;
  }
}
