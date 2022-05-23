import { Component, OnInit } from '@angular/core';
import { ExchangeRate, Rate } from '../../interfaces/exchangeRates.interfaces';
import { ConversorDivisasService } from '../../services/conversor-divisas.service';

@Component({
  selector: 'app-conversor-divisas',
  templateUrl: './conversor-divisas.component.html',
  styleUrls: ['./conversor-divisas.component.css'],
})
export class ConversorDivisasComponent implements OnInit {
  // Data Convert
  valor!: number;
  fromType: string = '';
  toType: string = '';
  monedasList: any[] = [];
  changeResult!: string;

  // Data Table
  usd: Rate = {};
  eur: Rate = {};
  gbp: Rate = {};

  time_last_update!: Date;
  monedas: string[] = ['USD', 'EUR', 'GBP'];

  constructor(private conversorService: ConversorDivisasService) {}

  ngOnInit(): void {
    //* Lista de Codigos internacionales de Monedas
    this.conversorService.getCurrencyList().subscribe(
      (codes) => {
        //* Obteniendo solo los VALORES del Objeto (NO la Key)
        const values: any[] = Object.values(codes.response.fiats);
        values.splice(-20, 16);

        this.monedasList = values;
        console.log(this.monedasList);
      },
      (error) => {
        console.log(error);
        console.log('Surgio un error en el servidor');
        // this.monedasList = this.conversorService.getReplacementCurrencyCode;
      }
    );

    //* ExchangeRate Table
    for (const mon of this.monedas) {
      console.log(mon);
      this.conversorService.getCurrencyTable(mon).subscribe(
        (resp) => {
          console.log(resp);
          this.time_last_update = new Date(resp.time_last_update_utc);
          if (resp.base_code == 'USD') {
            this.usd = resp.rates;
            // console.log(this.usd);
          }
          if (resp.base_code == 'GBP') {
            this.gbp = resp.rates;
            // console.log(this.gbp);
          }
          if (resp.base_code == 'EUR') {
            this.eur = resp.rates;
            // console.log(this.eur);
          }
        },
        (error) => {
          console.log('Error en el Servidor');
        }
      );
    }
  }

  //* Conversor de Moneda
  convertirMoneda() {
    console.log(this.valor, this.fromType, this.toType);
    if (
      this.valor == undefined ||
      this.fromType.length <= 0 ||
      this.toType.length <= 0
    ) {
      return;
    }

    this.conversorService
      .getcurrencyConverter(this.valor, this.fromType, this.toType)
      .subscribe(
        (resp) => {
          this.changeResult = resp.result;
          console.log(this.changeResult);
          console.log(resp);
        },
        (error) => {
          this.changeResult = 'Ocurrio un error con la Conversion';
        }
      );
  }
}
