import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchText:string = '';
  notFound = false;
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {

    this.movieService.movieNotFound.subscribe(() => {
     // this.notFound = true;
    })
  }

  search(){
    try{
      this.notFound =false;
      var year = 1990;
      this.movieService.searchMovie(this.searchText);
      while(year < 2022){
        year += 1;
      }

    }catch(ex){

    }
  }

}
