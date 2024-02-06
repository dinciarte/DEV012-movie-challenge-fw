import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interface/interface';
import { MovieLinkService } from 'src/app/services/movie-link.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(public movieLinkService: MovieLinkService) {}

  ngOnInit(): void {};

  @Input() movies: Movie[] = [];

  getImageUrl(posterPath: string | null): string {
    return posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : 'https://img.freepik.com/premium-psd/error-404-design-landing-page_540510-324.jpg?w=826';
  }
  
}