import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraductorComponent } from './pages/traductor/traductor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TraductorComponent],
  imports: [CommonModule, FormsModule],
  exports: [TraductorComponent],
})
export class TraductorModule {}
