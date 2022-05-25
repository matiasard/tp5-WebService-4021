import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorDivisasComponent } from './divisas/pages/conversor-divisas/conversor-divisas.component';
import { GeneradorQrComponent } from './generadorQr/pages/generador-qr/generador-qr.component';
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
  {
    path: 'convertidor',
    component: ConversorDivisasComponent,
  },
  {
    path: 'generadorQr',
    component: GeneradorQrComponent,
  },
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
