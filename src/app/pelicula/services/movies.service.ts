import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private url: string =
    'https://moviesminidatabase.p.rapidapi.com/movie/byYear/2021/';

  private get getHttpHeaders() {
    return {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com',
        'X-RapidAPI-Key': '2272da370bmsh959fdd726380f99p1b51d0jsnd82d9badb07c',
      }),
    };
  }

  constructor(private http: HttpClient) {}

  public moviesByYear(): Observable<any> {
    const header = new HttpHeaders({
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com',
      'X-RapidAPI-Key': '2272da370bmsh959fdd726380f99p1b51d0jsnd82d9badb07c',
    });
    const params = new HttpParams().set('page_size', '10').set('page', '1');
    return this.http.get<any>(this.url, { headers: header, params: params });
  }

  // (this.url, {
  //   headers:header,
  //   params: params,
  // })
  // public traducirTexto(): Observable<any> {
  //   const body = new HttpParams()
  //     .set('q', 'text')
  //     .set('target', 'target')
  //   return this.http.get<any>(this.url, this.getHttpHeaders, body);
  // }
}
