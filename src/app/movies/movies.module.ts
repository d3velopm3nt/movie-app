import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MoviesLayoutComponent } from './movies-layout/movies-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { MovieService } from './services/movie.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchTypePipe } from './pipes/search-type.pipe';
import { MovieDetailComponent } from './movie-details/movie-detail/movie-detail.component';
const routes:Routes = [
  {
    path: '',
    component:MoviesLayoutComponent
  }
]

@NgModule({
  declarations: [
    SearchComponent,

    MovieItemComponent,
    MoviesLayoutComponent,
    MovieDetailsComponent,
    SearchTypePipe,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatChipsModule
  ],
  providers:[MovieService,SearchTypePipe]
})
export class MoviesModule { }
