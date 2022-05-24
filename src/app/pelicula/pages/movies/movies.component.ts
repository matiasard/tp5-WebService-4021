import { Component, OnInit } from '@angular/core';
import { MovieDetail } from '../../interfaces/movieDetail.interface';
import { Pelicula } from '../../interfaces/movies.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Pelicula['results'] = [];
  moviesId: string[] = [];
  movieDetails: MovieDetail[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    console.log('funcion1: desde ngOnInit');
    this.moviesService.moviesByYear().subscribe((resp) => {
      console.log(resp);
      this.movies = resp.results;
      this.moviesId = this.movies.map((element) => element.imdb_id);

      //TODO: [Terminado] Hacer la funcion buscar por ID para juntar con el metodo moviesByYear y obtener las imagenes
      for (const elem of this.moviesId) {
        this.moviesService.moviesById(elem).subscribe((respDetail) => {
          this.movieDetails.push(respDetail);
        });
      }
      console.log(this.movieDetails);
    });
  }
}
