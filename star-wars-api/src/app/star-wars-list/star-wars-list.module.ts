import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWarsListRoutingModule } from './star-wars-list-routing.module';
import { StarWarsListComponent } from './star-wars-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    StarWarsListComponent,
    CharactersListComponent
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    StarWarsListRoutingModule,
    IvyCarouselModule,
    HttpClientModule
  ]
})
export class StarWarsListModule { }
