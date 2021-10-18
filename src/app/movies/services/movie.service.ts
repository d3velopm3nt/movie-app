import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { MovieModel } from "../models/movie.model";

@Injectable()
export class MovieService{
  movies:MovieModel[] = [];
  filtering = false;
  onMoviesUpdated = new BehaviorSubject<MovieModel[]>(this.movies);
  onSearchStarted = new Subject<void>();
  movieNotFound = new Subject<void>();
  constructor(private http:HttpClient){

  }

  clearSearch(){
    this.movies = [];
    this.onMoviesUpdated.next(this.movies)
  }

  searchMovie(title:string,year:number =0){
    this.onSearchStarted.next();
   this.getMovie(title,year).pipe().subscribe(movie=>{
      if(movie){
        debugger
        if(movie.Response === "False"){
          if(!this.filtering)  
          this.movieNotFound.next();
        }
        else if(this.movies.findIndex(x=>x.Year === movie.Year && x.Title === movie.Title && movie.Title !== "") === -1){
          
          if(movie.Poster === "N/A")movie.Poster = "assets/img/movie.png";
          this.movies.unshift(movie)
          this.onMoviesUpdated.next(this.movies);
        }
      }
    });
  }

  getMovie(title:string,year:number =0):Observable<MovieModel>{
    var yearparam =  year > 0 ? `&y=${year}` : "";
    var plot = "&plot=full";
    var url =  `${environment.omdbapiBase}?t=${title}${yearparam + plot}&apikey=${environment.apiKey}`;
    
    return this.http.get<MovieModel>(url)

  }
}
