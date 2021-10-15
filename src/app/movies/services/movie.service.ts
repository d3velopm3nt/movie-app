import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { MovieModel } from "../models/movie.model";

@Injectable()
export class MovieService{
  onMovieFound = new Subject<MovieModel>();
  constructor(private http:HttpClient){

  }

  searchMovie(title:string,year:string = ""){
    var titleparam =  title ? `t=${title}`  : "";
    var yearparam =  year ? `&y=${year}` : "";
    var url =  `${environment.omdbapiBase}?t=${title}${yearparam}&apikey=${environment.apiKey}`;
    this.http.get<MovieModel>(url).pipe().subscribe(res=>{
      if(res){
        this.onMovieFound.next(res);
      }
    });

  }
}
