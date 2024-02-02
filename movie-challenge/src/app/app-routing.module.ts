import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ErrorComponent } from './views/error/error.component';
import { DetailsComponent } from './views/details/details.component'; 

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'movie/:id', component: DetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
