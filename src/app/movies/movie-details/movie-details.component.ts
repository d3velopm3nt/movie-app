import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '../models/movie.model';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie:MovieModel;
  constructor() { }

  ngOnInit(): void {
  }

}
