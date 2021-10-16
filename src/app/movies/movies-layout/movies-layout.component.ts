import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies-layout',
  templateUrl: './movies-layout.component.html',
  styleUrls: ['./movies-layout.component.scss']
})
export class MoviesLayoutComponent implements OnInit {
  movies$: Observable<MovieModel[]>
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {

    this.movies$ =this.movieService.onMoviesUpdated.pipe();
  }

}
