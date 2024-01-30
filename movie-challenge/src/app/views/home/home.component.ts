import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, MoviesSearchParams } from 'src/app/interface/interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentPage = 0;
  pageSize = 20;
  totalMovies = 0;
  filteredGenre: number | null = null;
  movies: Movie[] = [];

  constructor(
    private movieApi: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = params['page'] ? +params['page'] - 1 : 0;
      this.filteredGenre = params['genre'] ? +params['genre'] : null;
      this.loadMovies();
    });
  }

  loadMovies() {
    const params: MoviesSearchParams = {
      page: this.currentPage + 1,
      genre: this.filteredGenre !== null ? [this.filteredGenre] : null,
      sort: 'popularity.desc',  // Ajusta según tu necesidad
    };

    this.movieApi.getMovies(params).subscribe(
      (data) => {
        this.movies = data.results;
        this.totalMovies = data.total_results;
      },
      (error) => {
        console.error('Error when trying to get movies', error);
      }
    );
  }

  handlePageEvent(pageEvent: PageEvent) {
    const newPageIndex = pageEvent.pageIndex;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: newPageIndex + 1, genre: this.filteredGenre },
      queryParamsHandling: 'merge',
    });

    this.loadMovies();
  }
}