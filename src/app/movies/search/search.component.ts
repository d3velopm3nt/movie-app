import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  public searchText:string = '';
  notFound = false;
  startYear:number =0 ;
  endYear:number =0;
  showFilter:boolean = false;
  subscriptions:Subscription[] = [];
  constructor(private movieService:MovieService) { }
  ngOnDestroy(): void {
    this.subscriptions.forEach(x=>x.unsubscribe());
  }

  ngOnInit(): void {

    this.subscriptions.push(this.movieService.movieNotFound.subscribe(() => {
        this.notFound = true;
      
    }))
  }

  search(){
    debugger
    try{
      this.notFound =false;
      var year = this.startYear;
      if(this.startYear === 0) this.movieService.searchMovie(this.searchText);
      else
      while(year < this.endYear){
        this.movieService.searchMovie(this.searchText,year);
        year += 1;
      }

    }catch(ex){
      alert(ex);
    }
  }

  cancel(){
    this.searchText = "";
    this.movieService.clearSearch();
  }

  clickFilter(){
    if(this.showFilter){
      this.movieService.filtering =false;
      this.showFilter = false
    }
    else{
      this.movieService.filtering =true;
      this.showFilter = true;
    }
  }

  clearFilter(){
    this.movieService.filtering = false;
    this.startYear = 0;
    this.endYear = 0;
  }

}
