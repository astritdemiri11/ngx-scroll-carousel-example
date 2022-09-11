import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollCarouselModule } from 'ngx-scroll-carousel';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScrollCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
