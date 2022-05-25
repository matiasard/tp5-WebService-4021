import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeneradorQrComponent } from './pages/generador-qr/generador-qr.component';

@NgModule({
  declarations: [GeneradorQrComponent],
  imports: [CommonModule, FormsModule],
  // exports: [GeneradorQrComponent],
})
export class GeneradorQrModule {}
