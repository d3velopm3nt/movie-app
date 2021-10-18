import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'searchType'})
export class SearchTypePipe implements PipeTransform{


  transform(value: any, ...args: any[]) {
   switch(value.toLowerCase()){
    case "movie":
      return "movie-type";
    case "series":
      return "series-type";
    case "episode":
      return "episode-type";
    default:
      return "movie-type";
   }
  }


}
