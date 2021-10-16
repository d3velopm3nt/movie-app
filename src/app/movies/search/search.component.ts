import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchText:string = "";
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
  }

  search(){
    debugger
    this.movieService.searchMovie(this.searchText);
  }

}
