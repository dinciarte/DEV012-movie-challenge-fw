import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  movieId: string;
  movieDetails: any = {};

  constructor(private route: ActivatedRoute, private apiService: ApiService, private location: Location ) {
    this.movieId = ''
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.loadMovieDetails();
    });
  }

  loadMovieDetails(): void {
    this.apiService.getMovieDetails(this.movieId).subscribe(
      (data) => {
        this.movieDetails = data;
        console.log(this.movieDetails.genres);
        
        this.movieDetails.genres = this.mapGenreIdsToNames(this.movieDetails.genres);
      },
      (error) => {
        console.error('Error fetching movie details', error);
      }
    );
  }

 mapGenreIdsToNames(genres: any[]): string[] {
  return genres.map(genre => genre.name);
}

backToMovies(): void {
  this.location.back();
}


}
