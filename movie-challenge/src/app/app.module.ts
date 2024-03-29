import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"; // con este módulo, se estará interactuando con la API

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { ErrorComponent } from './views/error/error.component';
import { CardsComponent } from './components/cards/cards.component';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FilterComponent } from './components/filter/filter.component'
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './views/details/details.component';
import { MovieLinkService } from './services/movie-link.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    CardsComponent,
    FilterComponent,
    DetailsComponent,
  ],
  imports: [
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, MovieLinkService],
  bootstrap: [AppComponent]
})
export class AppModule {}
