import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarWarsDetailsComponent } from './star-wars-details.component';

const routes: Routes = [
  {
    path: '', component: StarWarsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarsDetailsRoutingModule { }
