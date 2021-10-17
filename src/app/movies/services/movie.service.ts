import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { MovieModel } from "../models/movie.model";

@Injectable()
export class MovieService{
  movies:MovieModel[] = [];
  onMoviesUpdated = new BehaviorSubject<MovieModel[]>(this.movies);
  movieNotFound = new Subject<void>();
  constructor(private http:HttpClient){

  }

  searchMovie(title:string,year:number =0){
    var yearparam =  year > 0 ? `&y=${year}` : "";
    var plot = "&plot=full";
    var url =  `${environment.omdbapiBase}?t=${title}${yearparam }&apikey=${environment.apiKey}`;
    this.http.get<MovieModel>(url).pipe().subscribe(movie=>{
      if(movie){
        debugger
        if(movie.Error)
        this.movieNotFound.next();
        else if(this.movies.findIndex(x=>x.Title === movie.Title) === -1){
          this.movies.unshift(movie)
          this.onMoviesUpdated.next(this.movies);
        }
      }
    });

  }
}
