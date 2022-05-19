export interface Pelicula {
  links: Links;
  count: number;
  results: Result[];
}

export interface Links {
  next: string;
  previous: null;
}

export interface Result {
  imdb_id: string;
  title: string;
}
