export interface MovieDetail {
  results: Results;
}

export interface Results {
  imdb_id: string;
  title: string;
  year: number;
  popularity: number;
  description: string;
  content_rating: string;
  movie_length: number;
  rating: number;
  created_at: Date;
  trailer: string;
  image_url: string;
  release: Date;
  plot: string;
  banner: string;
  type: string;
  more_like_this: MoreLikeThis;
  gen: Gen[];
  keywords: Keyword[];
}

export interface Gen {
  id: number;
  genre: string;
}

export interface Keyword {
  id: number;
  keyword: string;
}

export interface MoreLikeThis {}
