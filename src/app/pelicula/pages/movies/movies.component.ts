import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    console.log('funcion1: desde ngOnInit');
    this.moviesService.moviesByYear().subscribe((resp) => {
      console.log(resp);
      this.movies = resp.results;
      console.log(this.movies);
    });
  }

  // buscarPorAnio() {
  //   console.log('funcion1');
  //   this.moviesService.moviesByYear().subscribe((resp) => console.log(resp));
  // }
}
