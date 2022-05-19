import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './pelicula/pages/movies/movies.component';

import { TraductorComponent } from './traductor/pages/traductor/traductor.component';

const routes: Routes = [
  {
    path: '',
    component: TraductorComponent,
    pathMatch: 'full',
  },
  {
    path: 'traductor',
    component: TraductorComponent,
  },
  {
    path: 'peliculas',
    component: MoviesComponent,
  },
  // {
  //   path: 'pais/:id',
  //   component: VerPaisComponent,
  // },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
