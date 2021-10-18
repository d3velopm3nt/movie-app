import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MovieModel } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies-layout',
  templateUrl: './movies-layout.component.html',
  styleUrls: ['./movies-layout.component.scss']
})
export class MoviesLayoutComponent implements OnInit, OnDestroy {
  movies$: Observable<MovieModel[]>
  loading:boolean = false;
  subscriptions:Subscription[] = [];
  constructor(private movieService:MovieService) { }
  ngOnDestroy(): void {
   this.subscriptions.forEach(x=>x.unsubscribe());
  }

  ngOnInit(): void {

   this.subscriptions.push(this.movieService.onSearchStarted.subscribe(()=>{
      this.loading = true;
    }))

    this.subscriptions.push(this.movieService.movieNotFound.subscribe(() =>{
      this.loading = false;
    }))

    this.movies$ =this.movieService.onMoviesUpdated.pipe();

    this.subscriptions.push(this.movies$.pipe().subscribe(list=>{
      if(list && list.length > 0)
      this.loading = false;
    }))
    
  }

}
