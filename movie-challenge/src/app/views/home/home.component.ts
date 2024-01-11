import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any[] = [];

  constructor(private homeService: ApiService) {}

  ngOnInit(): void {
    console.log("holi");
    
    this.homeService.getMovies().subscribe(
      (data) => {
        this.movies = data.results;
      },
      (error) => {
        console.error('Error when trying to get movies', error);
      }
    );
  }

}
