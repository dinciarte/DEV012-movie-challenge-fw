import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  MoviesResponse,
  MoviesSearchParams,
  Movie,
} from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private MOVIE_URL: string = 'https://api.themoviedb.org/3/discover/movie';
  private DETAILS_URL: string = 'https://api.themoviedb.org/3/movie';
  private API_KEY: string = '?api_key=43a145f0766c2ca4a77de7c5572aea96';

  constructor(private http: HttpClient) {}

  getMovies(params: MoviesSearchParams): Observable<MoviesResponse> {
    let httpParams = new HttpParams()
      .set('include_adult', 'false')
      .set('include_video', 'false')
      .set('language', 'en-US');
  
    if (params.page) {
      httpParams = httpParams.set('page', params.page.toString());
    }
  
    if (params.sort) {
      httpParams = httpParams.set('sort_by', params.sort);
    }
  
    if (params.genre) {
      httpParams = httpParams.set('with_genres', params.genre.toString());
    }
  
    const url = `${this.MOVIE_URL}${this.API_KEY}`;
    return this.http.get<MoviesResponse>(url, { params: httpParams });
  }

  getMovieDetails(movieId: string): Observable<Movie> {
    const url = `${this.DETAILS_URL}/${movieId}${this.API_KEY}`;
    console.log(url);

    return this.http.get<Movie>(url);
  }
}