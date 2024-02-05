import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StateService } from 'src/app/services/services.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() resetFunction: () => void = () => {};
  @Output() resetFiltersEvent = new EventEmitter<void>();

  @Output() moviesFiltered = new EventEmitter<number>();

  formMovies;

  movieId = 0;

  genresArray = [
    { name: 'Action', id: 28 },
    { name: 'Adventure', id: 12 },
    { name: 'Animation', id: 16 },
    { name: 'Comedy', id: 35 },
    { name: 'Crime', id: 80 },
    { name: 'Documentary', id: 99 },
    { name: 'Drama', id: 18 },
    { name: 'Family', id: 10751 },
    { name: 'Fantasy', id: 14 },
    { name: 'History', id: 36 },
    { name: 'Horror', id: 27 },
    { name: 'Music', id: 10402 },
    { name: 'Mystery', id: 9648 },
    { name: 'Romance', id: 10749 },
    { name: 'Science Fiction', id: 878 },
    { name: 'TV Movie', id: 10770 },
    { name: 'Thriller', id: 53 },
    { name: 'War', id: 10752 },
    { name: 'Western', id: 37 },
  ];

  sortingArray = [
    { label: 'Popularity Ascending', value: 'popularity.asc' },
    { label: 'Popularity Descending', value: 'popularity.desc' },
    { label: 'Release Date Ascending', value: 'primary_release_date.asc' },
    { label: 'Release Date Descending', value: 'primary_release_date.desc' },
    { label: 'Vote Average Ascending', value: 'vote_average.asc' },
    { label: 'Vote Average Descending', value: 'vote_average.desc' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private stateService: StateService
  ) {
    this.formMovies = this.formBuilder.group({
      genreValue: new FormControl(),
      sortValue: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onGenreSelectionChange() {
    this.movieId = Number(this.formMovies.controls.genreValue.value);
    const sortValue = this.formMovies.controls.sortValue.value;

    this.moviesFiltered.emit(this.movieId);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { genre: this.movieId, sort: sortValue },
      queryParamsHandling: 'merge',
    });

    this.stateService.setFilteredGenre(this.movieId);
    this.stateService.setSortingState(sortValue);
  }

  resetFilters() {
    console.log('Reset filters button clicked!');
    this.formMovies.controls.genreValue.setValue(null);
    this.formMovies.controls.sortValue.setValue(null);

    this.resetFiltersEvent.emit();
  }
}

