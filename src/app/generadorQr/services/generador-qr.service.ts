import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneradorQrService {
  url2: string = 'https://qr-generator-api.p.rapidapi.com/api/qrcode/generate';

  constructor(private http: HttpClient) {}

  qrGenerate2(parametro: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'qr-generator-api.p.rapidapi.com',
        'X-RapidAPI-Key': '2272da370bmsh959fdd726380f99p1b51d0jsnd82d9badb07c',
      }),
    };

    const body = new HttpParams()
      .set('text', parametro)
      .set('foreColor', '#000000')
      .set('backColor', '#ffffff')
      .set('pixel', 10);

    return this.http.get<any>(this.url2, {
      headers: httpOptions.headers,
      params: body,
    });
  }
}
