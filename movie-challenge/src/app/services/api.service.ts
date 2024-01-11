// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   private MOVIE_URL: string = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc';
//   private API_KEY: string = '&api_key=43a145f0766c2ca4a77de7c5572aea96';

//   constructor(private http: HttpClient) {}

//   getMovies(): Observable<any> {
//     return this.http.get(`${this.MOVIE_URL}${this.API_KEY}`);
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private MOVIE_URL: string = 'https://api.themoviedb.org/3/discover/movie';
  private API_KEY: string = '?api_key=43a145f0766c2ca4a77de7c5572aea96';
  private DEFAULT_PAGE: number = 1;

  constructor(private http: HttpClient) {}

  getMovies(page: number = this.DEFAULT_PAGE): Observable<any> {
    // Agrega el parámetro de página a la URL
    const url = `${this.MOVIE_URL}${this.API_KEY}&page=${page}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc`;
    return this.http.get(url);
  }
}