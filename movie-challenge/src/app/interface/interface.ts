export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  routeLink?: string;
}

export enum OriginalLanguage {
  En = 'en',
  Fr = 'fr',
  Ru = 'ru',
}

export interface MoviesSearchParams {
  page?: number;
  genre?: number[] | null;
  sort?: string;
}
