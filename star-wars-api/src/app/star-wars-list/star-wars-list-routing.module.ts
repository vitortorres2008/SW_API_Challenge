import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarWarsListComponent } from './star-wars-list.component';

const routes: Routes = [
  {
    path: '', component: StarWarsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarsListRoutingModule { }
