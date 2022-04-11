import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'sw-list', loadChildren: () => import('./star-wars-list/star-wars-list.module').then(m => m.StarWarsListModule)
  },
  {
    path: 'movie-details/:id', loadChildren: () => import('./star-wars-details/star-wars-details.module').then(m => m.StarWarsDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
