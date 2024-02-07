import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, MoviesSearchParams } from 'src/app/interface/interface';
import { ApiService } from 'src/app/services/api.service';
import { StateService } from 'src/app/services/services.service';
import { MovieLinkService } from 'src/app/services/movie-link.service';
import { PageEvent } from '@angular/material/paginator';

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
  sortingState: string | null = null; 

  constructor(
    private movieApi: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private stateService: StateService,
    private movieLinkService: MovieLinkService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params['page'] ? +params['page'] - 1 : 0;
      this.filteredGenre = params['genre'] ? +params['genre'] : null;
      this.sortingState = this.stateService.getSortingState();
      this.loadMovies();
    });

    this.stateService.sortingState$.subscribe((sortingState) => {
      this.sortingState = sortingState;
      this.loadMovies();
    });

    this.stateService.resetFilters$.subscribe(() => {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {},
        queryParamsHandling: 'merge',
      });

      this.filteredGenre = null;
      this.currentPage = 0;

      this.loadMovies();
    });
  }

  loadMovies(filteredGenre?: number) {
    if (filteredGenre !== undefined) {
      this.filteredGenre = filteredGenre;
    }

    const params: MoviesSearchParams = {
      page: this.currentPage + 1,
      genre: this.filteredGenre !== null ? [this.filteredGenre] : null,
      sort: this.sortingState || 'popularity.desc',
    };

    this.movieApi.getMovies(params).subscribe(
      (data) => {
        this.movies = data.results;
        this.totalMovies = data.total_results;

        this.movies.forEach(movie => {
          movie.routeLink = this.movieLinkService.buildMovieLink(movie.id);
        });

      },
      (error) => {
        console.error('Error when trying to get movies', error);
      }
    );
  }

  handlePageEvent(pageEvent: PageEvent) {
    const newPageIndex = pageEvent.pageIndex;
    this.currentPage = newPageIndex;
    this.updateUrlAndLoadMovies();
  }
  
  updateUrlAndLoadMovies() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.currentPage + 1,
        genre: this.filteredGenre,
        sort: this.sortingState
      },
      queryParamsHandling: 'merge',
    });
  
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    this.loadMovies();
  }

  onMovieClick(movieId: number): void {
    this.movieLinkService.navigateToMovieDetails(movieId);
  }

  resetFilters() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
      queryParamsHandling: 'merge',
    });
  
    this.filteredGenre = null;
    this.sortingState = null;
    this.currentPage = 0;
  
    this.loadMovies();
  }
}