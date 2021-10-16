import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesLayoutComponent } from './movies/movies-layout/movies-layout.component';
import { MoviesModule } from './movies/movies.module';

const routes: Routes = [
  {
    path: 'movie-search',
    loadChildren: () => import('./movies/movies.module').then(m=>m.MoviesModule)
  },
  {
    path: '**',
    loadChildren: () => import('./movies/movies.module').then(m=>m.MoviesModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
