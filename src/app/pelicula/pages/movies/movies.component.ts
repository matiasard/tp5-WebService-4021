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
  movieDetail!: MovieDetail;
  movieDetails: MovieDetail[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    console.log('funcion1: desde ngOnInit');
    this.moviesService.moviesByYear().subscribe((resp) => {
      console.log(resp);
      this.movies = resp.results;
      this.moviesId = this.movies.map((element) => element.imdb_id);
      // console.log(this.moviesId);

      //TODO: [Terminado] Hacer la funcion buscar por ID para juntar con el metodo moviesByYear y obtener las imagenes
      for (let index = 0; index < this.moviesId.length; index++) {
        const element = this.moviesId[index];
        // console.log(element);
        this.moviesService.moviesById(element).subscribe((respDetail) => {
          this.movieDetail = respDetail;
          this.movieDetails.push(this.movieDetail);
          // console.log(this.movieDetail);
        });
      }
      console.log(this.movieDetails);
    });
  }
}
