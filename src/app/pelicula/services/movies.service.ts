import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetail } from '../interfaces/movieDetail.interface';
import { Pelicula } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private url: string = 'https://moviesminidatabase.p.rapidapi.com/movie';

  private get getHttpHeaders() {
    return {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com',
        'X-RapidAPI-Key': '2272da370bmsh959fdd726380f99p1b51d0jsnd82d9badb07c',
      }),
    };
  }

  constructor(private http: HttpClient) {}

  public moviesByYear(): Observable<Pelicula> {
    const apiUrl = `${this.url}/byYear/2021/`;
    const header = new HttpHeaders({
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com',
      'X-RapidAPI-Key': '2272da370bmsh959fdd726380f99p1b51d0jsnd82d9badb07c',
    });
    const params = new HttpParams().set('page_size', '12').set('page', '1');
    return this.http.get<Pelicula>(apiUrl, {
      headers: header,
      params: params,
    });
  }

  //TODO: [Terminado] Hacer la funcion buscar por ID para juntar con el metodo moviesByYear para buscar las imagenes y detalles
  public moviesById(id: string): Observable<MovieDetail> {
    const apiUrl = `https://moviesminidatabase.p.rapidapi.com/movie/id/${id}/`;
    return this.http.get<MovieDetail>(apiUrl, this.getHttpHeaders);
  }
}
