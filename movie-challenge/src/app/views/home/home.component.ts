import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, MoviesSearchParams } from 'src/app/interface/interface';
import { PaginatorService } from 'src/app/services/paginator.service';
import { ApiService } from 'src/app/services/api.service';
import { StateService } from 'src/app/services/services.service';
import { MovieLinkService } from 'src/app/services/movie-link.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{provide: MatPaginatorIntl, useClass: PaginatorService}]
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

    this.stateService.resetFilters$.subscribe(() => {
      // this.resetUrl();
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
        console.log("holi2wi", data);
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
  
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: newPageIndex + 1, genre: this.filteredGenre },
      queryParamsHandling: 'merge',
    });
  
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    this.loadMovies();
  }

  resetUrl(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
      queryParamsHandling: 'merge',
    });
  
    this.filteredGenre = null;
    this.currentPage = 0;
  
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
    this.currentPage = 0;
  
    this.loadMovies();
  }

}

