import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TraductorComponent } from './pages/traductor/traductor.component';

@NgModule({
  declarations: [TraductorComponent],
  imports: [CommonModule, FormsModule],
  exports: [TraductorComponent],
})
export class TraductorModule {}
