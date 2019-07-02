import { Component, h } from '@stencil/core';


@Component({
  tag: 'page-about',
  styleUrl: 'page-about.css'
})
export class PageAbout {



  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Tabs Starter</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <h1>About</h1>
      </ion-content>
    ];
  }
}
