import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private currentPageSubject = new BehaviorSubject<number>(0);
  private filteredGenreSubject = new BehaviorSubject<number | null>(null);

  currentPage$: Observable<number> = this.currentPageSubject.asObservable();
  filteredGenre$: Observable<number | null> = this.filteredGenreSubject.asObservable();

  setCurrentPage(page: number): void {
    this.currentPageSubject.next(page);
  }

  setFilteredGenre(genre: number | null): void {
    this.filteredGenreSubject.next(genre);
  }
}