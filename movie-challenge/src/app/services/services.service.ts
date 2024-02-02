import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class StateService {
  private currentPageSubject = new BehaviorSubject<number>(0);
  private filteredGenreSubject = new BehaviorSubject<number | null>(null);
  private sortingStateSubject = new BehaviorSubject<string | null>(null);
  private resetFiltersSubject = new Subject<void>();

  currentPage$: Observable<number> = this.currentPageSubject.asObservable();
  filteredGenre$: Observable<number | null> = this.filteredGenreSubject.asObservable();
  sortingState$: Observable<string | null> = this.sortingStateSubject.asObservable();
  resetFilters$ = this.resetFiltersSubject.asObservable();

  setCurrentPage(page: number): void {
    this.currentPageSubject.next(page);
  }

  setFilteredGenre(genre: number | null): void {
    this.filteredGenreSubject.next(genre);
  }

  setSortingState(sortingState: string | null): void {
    this.sortingStateSubject.next(sortingState);
  }
  
  getSortingState(): string | null {
    return this.sortingStateSubject.getValue();
  }

  resetFilters() {
    this.resetFiltersSubject.next();
  }

  
  
}