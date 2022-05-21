import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversorDivisasService {
  private url: string =
    'https://community-neutrino-currency-conversion.p.rapidapi.com/convert';

  private get getHttpHeaders() {
    return {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host':
          'community-neutrino-currency-conversion.p.rapidapi.com',
        'X-RapidAPI-Key': '2272da370bmsh959fdd726380f99p1b51d0jsnd82d9badb07c',
      }),
    };
  }

  constructor(private http: HttpClient) {}

  converter(valor: number, fromType: string, toType: string): Observable<any> {
    const params = new HttpParams()
      .set('from-value', `${valor}`)
      .set('from-type', `${fromType}`)
      .set('to-type', `${toType}`);
    return this.http.post(this.url, params, this.getHttpHeaders);
  }
}
