import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarWarsListModule } from './star-wars-list/star-wars-list.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { StarWarsDetailsModule } from './star-wars-details/star-wars-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarWarsListModule,
    StarWarsDetailsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
