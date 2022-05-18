import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Traducir } from '../interfaces/traducir.interface';

@Injectable({
  providedIn: 'root',
})
export class TraductorService {
  private apiUrl: string =
    'https://google-translate1.p.rapidapi.com/language/translate/v2';

  private get getHttpHeader() {
    return {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': '2272da370bmsh959fdd726380f99p1b51d0jsnd82d9badb07c',
      }),
    };
  }

  constructor(private http: HttpClient) {}

  public traducirTexto(
    source: string,
    target: string,
    text: string
  ): Observable<Traducir> {
    console.log(source, target, text);
    const body = new HttpParams()
      .set('q', text)
      .set('target', target)
      .set('source', source);
    return this.http.post<Traducir>(this.apiUrl, body, this.getHttpHeader);
  }
}
