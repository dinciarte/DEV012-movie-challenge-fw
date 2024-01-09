import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private MOVIE_URL: string = "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=";
  private API_KEY: string = "43a145f0766c2ca4a77de7c5572aea96";

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(`${this.MOVIE_URL}${this.API_KEY}`);
  }
}