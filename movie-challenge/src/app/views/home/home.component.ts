// import { Component, OnInit } from '@angular/core';
// import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
// import { ApiService } from 'src/app/services/api.service';
// import { PaginatorService } from 'src/app/services/paginator.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
//   providers: [{provide: MatPaginatorIntl, useClass: PaginatorService }]
// })
// export class HomeComponent implements OnInit {

//   currentPage = 0;

//   handlePageEvent(pageEvent: PageEvent){
//     console.log('handlePageEvent', pageEvent);
//     this.currentPage = pageEvent.pageIndex;
    
//   }

//   movies: any[] = [];

//   constructor(private homeService: ApiService) {}

//   ngOnInit(): void {
//     console.log("holi");
    
//     this.homeService.getMovies().subscribe(
//       (data) => {
//         this.movies = data.results;
//       },
//       (error) => {
//         console.error('Error when trying to get movies', error);
//       }
//     );
//   }

// }

import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  currentPage = 0;
  pageSize = 20; // Puedes ajustar el tamaño de la página según tus necesidades
  totalMovies = 0; // Variable para almacenar el número total de películas

  movies: any[] = [];

  constructor(private homeService: ApiService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    // Utiliza el servicio para obtener las películas con el número de página y tamaño de página actual
    this.homeService.getMovies(this.currentPage + 1).subscribe(
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
    // Este método se llama cada vez que cambias de página
    this.currentPage = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;

    // Llama a la función para cargar las películas de la nueva página
    this.loadMovies();
  }
}
