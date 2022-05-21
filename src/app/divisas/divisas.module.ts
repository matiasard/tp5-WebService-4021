import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConversorDivisasComponent } from './pages/conversor-divisas/conversor-divisas.component';

@NgModule({
  declarations: [ConversorDivisasComponent],
  imports: [CommonModule, FormsModule],
  //todo: exports: []
})
export class DivisasModule {}
