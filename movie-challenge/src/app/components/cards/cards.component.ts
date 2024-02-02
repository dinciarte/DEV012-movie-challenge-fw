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
  
}