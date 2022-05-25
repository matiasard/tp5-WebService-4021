import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './shared/header/header.component';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TraductorModule } from './traductor/traductor.module';
import { PeliculaModule } from './pelicula/pelicula.module';
import { DivisasModule } from './divisas/divisas.module';
import { GeneradorQrModule } from './generadorQr/generador-qr.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TraductorModule,
    PeliculaModule,
    SharedModule,
    DivisasModule,
    GeneradorQrModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
