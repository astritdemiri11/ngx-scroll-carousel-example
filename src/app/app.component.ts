import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-scroll-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  configs: CarouselConfig;

  constructor() {
    this.configs = {
      autoplay: true,
      controls: true,
      controlsActiveClass: '',
      controlsButtonClass: '',
      controlsOverClass: '',
      items: 2,
      mobileGestures: true,
      navigation: true,
      navigationIconClass: '',
      navigationOverClass: '',
      responsive: [],
      slide: 1,
      speed: 2000
    }
  }
}
