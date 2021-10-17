import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '../models/movie.model';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie:MovieModel;
  detailsButtonText:string = "Show More";
  showDetail:boolean =false;
  constructor() { }

  ngOnInit(): void {

    this.movie;
  }

  clickDetails(){
    if(this.detailsButtonText ==="Show Less"){
      this.showDetail =false;
      this.detailsButtonText = "Show More";
    }
    else{
      this.detailsButtonText = "Show Less";
      this.showDetail =true;
    }

  }

}
