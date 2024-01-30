import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interface/interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  ngOnInit(): void {};

  @Input() movies: Movie[] = [];
  
}