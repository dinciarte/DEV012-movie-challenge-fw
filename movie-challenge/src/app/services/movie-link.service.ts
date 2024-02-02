import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieLinkService {
  baseMovieRoute = '/movie';

  constructor(private router: Router) { }

  navigateToMovieDetails(movieId: number): void {
    const movieLink = this.buildMovieLink(movieId);
    this.router.navigateByUrl(movieLink);
  }

  public buildMovieLink(movieId: number): string {
    return `${this.baseMovieRoute}/${movieId}`;
  }

}