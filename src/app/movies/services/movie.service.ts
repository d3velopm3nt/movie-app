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
   this.getMovie(title,year).pipe().subscribe(movie=>{
      if(movie){
        debugger
        if(!movie.Response)
        this.movieNotFound.next();
        else if(this.movies.findIndex(x=>x === movie) === -1){
          this.movies.unshift(movie)
          this.onMoviesUpdated.next(this.movies);
        }
      }
    });
  }

  getMovie(title:string,year:number =0):Observable<MovieModel>{
    var yearparam =  year > 0 ? `&y=${year}` : "";
    var plot = "&plot=full";
    var url =  `${environment.omdbapiBase}?t=${title}${yearparam }&apikey=${environment.apiKey}`;
    debugger
    return this.http.get<MovieModel>(url)

  }
}
