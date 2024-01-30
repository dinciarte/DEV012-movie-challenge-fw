// // import { HttpClient, HttpParams } from '@angular/common/http';
// // import { Injectable } from '@angular/core';
// // import { Observable } from 'rxjs';
// // import { Movie, MoviesResponse } from '../interface/interface';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class ApiService {

// //   private MOVIE_URL: string = 'https://api.themoviedb.org/3/discover/movie';
// //   private API_KEY: string = '?api_key=43a145f0766c2ca4a77de7c5572aea96';
// //   private DEFAULT_PAGE: number = 1;

// //   constructor(private http: HttpClient) {}

// //   getMovies(page: number = this.DEFAULT_PAGE): Observable<MoviesResponse> {
// //     const url = `${this.MOVIE_URL}${this.API_KEY}&page=${page}&include_adult=false&include_video=false&language=en-US`;
// //     return this.http.get<MoviesResponse>(url);
// //   }

// //   getGenres(page: number = this.DEFAULT_PAGE, genre: number[]): Observable<MoviesResponse> {
// //     const params = new HttpParams().set('page', page.toString())
// //                                    .set('include_adult', 'false')
// //                                    .set('include_video', 'false')
// //                                    .set('language', 'en-US')
// //                                    .set('with_genres', genre.join(','));

// //     const url = `${this.MOVIE_URL}${this.API_KEY}`;
// //     return this.http.get<MoviesResponse>(url, { params });
// //   }
// // }

// // import { HttpClient, HttpParams } from '@angular/common/http';
// // import { Injectable } from '@angular/core';
// // import { Observable } from 'rxjs';
// // import { MoviesResponse } from '../interface/interface';

// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class ApiService {

// //   private MOVIE_URL: string = 'https://api.themoviedb.org/3/discover/movie';
// //   private API_KEY: string = '?api_key=43a145f0766c2ca4a77de7c5572aea96';
// //   private DEFAULT_PAGE: number = 1;

// //   constructor(private http: HttpClient) {}

// //   getMovies(params: { page?: number, genre?: number[], sort?: string }): Observable<MoviesResponse> {
// //     let httpParams = new HttpParams().set('include_adult', 'false')
// //                                      .set('include_video', 'false')
// //                                      .set('language', 'en-US');

// //     if (params.page) {
// //       httpParams = httpParams.set('page', params.page.toString());
// //     }

// //     if (params.genre && params.genre.length > 0) {
// //       httpParams = httpParams.set('with_genres', params.genre.join(','));
// //     }

// //     if (params.sort) {
// //       httpParams = httpParams.set('sort_by', params.sort);
// //     }

// //     const url = `${this.MOVIE_URL}${this.API_KEY}`;
// //     return this.http.get<MoviesResponse>(url, { params: httpParams });
// //   }
// // }

// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Movie, MoviesResponse } from '../interface/interface';

// interface MoviesSearchParams {
//   page?: number;
//   genre?: number[];
//   sort?: string;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class ApiService {
//   private MOVIE_URL: string = 'https://api.themoviedb.org/3/discover/movie';
//   private API_KEY: string = '?api_key=43a145f0766c2ca4a77de7c5572aea96';
//   private DEFAULT_PAGE: number = 1;

//   constructor(private http: HttpClient) {}

//   getMovies(params: MoviesSearchParams): Observable<MoviesResponse> {
//     let httpParams = new HttpParams()
//       .set('include_adult', 'false')
//       .set('include_video', 'false')
//       .set('language', 'en-US');

//     if (params.page) {
//       httpParams = httpParams.set('page', params.page.toString());
//     }

//     if (params.genre && params.genre.length > 0) {
//       httpParams = httpParams.set('with_genres', params.genre.join(','));
//     }

//     if (params.sort) {
//       httpParams = httpParams.set('sort_by', params.sort);
//     }

//     const url = `${this.MOVIE_URL}${this.API_KEY}`;
//     return this.http.get<MoviesResponse>(url, { params: httpParams });
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesResponse , MoviesSearchParams  } from '../interface/interface';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private MOVIE_URL: string = 'https://api.themoviedb.org/3/discover/movie';
  private API_KEY: string = '?api_key=43a145f0766c2ca4a77de7c5572aea96';
  private DEFAULT_PAGE: number = 1;

  constructor(private http: HttpClient) {}

  getMovies(params: MoviesSearchParams): Observable<MoviesResponse> {
    let httpParams = new HttpParams()
      .set('include_adult', 'false')
      .set('include_video', 'false')
      .set('language', 'en-US');

    if (params.page) {
      httpParams = httpParams.set('page', params.page.toString());
    }

    if (params.genre && params.genre.length > 0) {
      httpParams = httpParams.set('with_genres', params.genre.join(','));
    }

    if (params.sort) {
      httpParams = httpParams.set('sort_by', params.sort);
    }

    const url = `${this.MOVIE_URL}${this.API_KEY}`;
    return this.http.get<MoviesResponse>(url, { params: httpParams });
  }
}