import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() name:string;
  @Input() value:string;
  @Input() isList:boolean = false;
  list:Array<string> =[];
  constructor() { }

  ngOnInit(): void {
    if(this.isList)
    this.list = this.value.split(",")
  }

}
