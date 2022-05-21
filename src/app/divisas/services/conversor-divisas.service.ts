import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversorDivisasService {
  private replacementCurrencyCode: string[] = [
    'AED',
    'ARS',
    'AUD',
    'BDT',
    'BGN',
    'BHD',
    'BND',
    'BOB',
    'BRL',
    'BWP',
    'BYN',
    'CAD',
    'CHF',
    'CLP',
    'CNY',
    'COP',
    'CRC',
    'CZK',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'EUR',
    'FJD',
    'GBP',
    'GEL',
    'GHS',
    'HKD',
    'HRK',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'IQD',
    'JOD',
    'JOD',
    'KES',
    'KRW',
  ];

  private urlConvert: string =
    'https://community-neutrino-currency-conversion.p.rapidapi.com/convert';

  private urlCurrentCodes = 'https://currencyscoop.p.rapidapi.com/currencies';

  //* INJECTIONS
  constructor(private http: HttpClient) {}

  //* METHODS

  //? Convertidor de monedas internacionales
  getcurrencyConverter(
    valor: number,
    fromType: string,
    toType: string
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host':
          'community-neutrino-currency-conversion.p.rapidapi.com',
        'X-RapidAPI-Key': '2272da370bmsh959fdd726380f99p1b51d0jsnd82d9badb07c',
      }),
    };
    const params = new HttpParams()
      .set('from-value', `${valor}`)
      .set('from-type', `${fromType}`)
      .set('to-type', `${toType}`);
    return this.http.post<any>(this.urlConvert, params, httpOptions);
  }

  //? Lista de codigos internacionales de monedas
  getCurrencyList(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com',
        'X-RapidAPI-Key': '2272da370bmsh959fdd726380f99p1b51d0jsnd82d9badb07c',
      }),
    };
    return this.http.get<any>(this.urlCurrentCodes, httpOptions);
  }
}
