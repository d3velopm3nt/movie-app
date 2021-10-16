import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MoviesLayoutComponent } from './movies-layout/movies-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MovieService } from './services/movie.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  {
    path: '',
    component:MoviesLayoutComponent
  }
]

@NgModule({
  declarations: [
    SearchComponent,
    MovieListComponent,
    MovieItemComponent,
    MoviesLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[MovieService]
})
export class MoviesModule { }
