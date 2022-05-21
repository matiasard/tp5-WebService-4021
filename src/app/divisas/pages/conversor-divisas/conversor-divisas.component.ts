import { Component, OnInit } from '@angular/core';
import { ConversorDivisasService } from '../../services/conversor-divisas.service';

@Component({
  selector: 'app-conversor-divisas',
  templateUrl: './conversor-divisas.component.html',
  styleUrls: ['./conversor-divisas.component.css'],
})
export class ConversorDivisasComponent implements OnInit {
  valor: number = 5000;
  fromType: string = 'ARS';
  toType: string = 'USD';
  monedas: string[] = ['asd', 'asdd'];

  constructor(private conversorService: ConversorDivisasService) {}

  ngOnInit(): void {}

  convertirMoneda() {
    console.log(this.valor, this.fromType, this.toType);
    // this.conversorService
    //   .converter(this.valor, this.fromType, this.toType)
    //   .subscribe((resp) => {
    //     console.log(resp);
    //   });
  }
}
