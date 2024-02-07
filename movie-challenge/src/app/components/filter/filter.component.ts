import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/services.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<void>();
  @Output() moviesFiltered = new EventEmitter<number>();

  formMovies;

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
    private stateService: StateService
  ) {
    this.formMovies = this.formBuilder.group({
      genreValue: new FormControl(),
      sortValue: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onGenreSelectionChange() {
    const genreValue = this.formMovies.controls.genreValue.value;

    if (genreValue !== null) {
      this.stateService.setFilteredGenre(Number(genreValue));
      this.updateUrlAndNotify();
    }
  }

  onSortSelectionChange() {
    const sortValue = this.formMovies.controls.sortValue.value;

    if (sortValue !== null) {
      this.stateService.setSortingState(sortValue);
      this.updateUrlAndNotify();
    }
  }

  updateUrlAndNotify() {
    const queryParams = {
      genre: this.formMovies.controls.genreValue.value,
      sort: this.formMovies.controls.sortValue.value,
    };

    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
    });

    this.filtersChanged.emit();
  }

  resetFilters() {
    this.formMovies.reset();
    this.updateUrlAndNotify();
  }
}