import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="tab-home" />
          <ion-route url="/profile/:name" component="app-profile" />
          <ion-route url="/settings-page" component="tab-about"></ion-route>
        </ion-router>

        <ion-tabs>

          <ion-tab tab="tab-home" component="app-home">
          </ion-tab>

          <ion-tab tab="tab-speaker">
          </ion-tab>

          <ion-tab tab="tab-map" component="page-map">
          </ion-tab>

          <ion-tab tab="tab-about" component="page-about">
          </ion-tab>

          <ion-tab-bar slot="bottom">
            <ion-tab-button tab="tab-home">
              <ion-icon name="home"></ion-icon>
              <ion-label>Home</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab-speaker">
              <ion-icon name="contacts"></ion-icon>
              <ion-label>Speakers</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab-map">
              <ion-icon name="map"></ion-icon>
              <ion-label>Map</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab-about">
              <ion-icon name="information-circle"></ion-icon>
              <ion-label>About</ion-label>
            </ion-tab-button>
          </ion-tab-bar>

        </ion-tabs>
      </ion-app>
    );
  }
}
