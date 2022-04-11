import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWarsDetailsRoutingModule } from './star-wars-details-routing.module';
import { StarWarsDetailsComponent } from './star-wars-details.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StarWarsDetailsComponent],
  imports: [
    CommonModule,
    IvyCarouselModule,
    ReactiveFormsModule,
    StarWarsDetailsRoutingModule
  ]
})
export class StarWarsDetailsModule { }
