import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { of } from 'rxjs';
import { MovieModel } from '../models/movie.model';

const mockMovie =
  {
    Title: "Iron Man 2",
    Year: "2010",
    Rated: "PG-13",
    Released: "07 May 2010",
    Runtime: "124 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Jon Favreau",
    Writer: "Justin Theroux, Stan Lee, Don Heck",
    Actors: "Robert Downey Jr., Mickey Rourke, Gwyneth Paltrow",
    Plot: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
    Language: "English, French, Russian",
    Country: "United States",
    Awards: "Nominated for 1 Oscar. 7 wins & 44 nominations total",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg",
    Ratings: [{
        Source: "Internet Movie Database",
        Value: "7.0/10"
      }, {
        Source: "Rotten Tomatoes",
        Value: "72%"
      }, {
        Source: "Metacritic",
        Value: "57/100"
      }
    ],
    Metascore: "57",
    imdbRating: "7.0",
    imdbVotes: "758,173",
    imdbID: "tt1228705",
    Type: "movie",
    DVD: "17 Aug 2010",
    BoxOffice: "$312,433,331",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  }

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers:[MovieService]
    });
    service = TestBed.inject(MovieService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  var movieTitle = "Iron man 2";
  it(`subscribe method should be called`, fakeAsync(() =>{
    let servicespy = spyOn(service,'getMovie').and.returnValue(of(mockMovie))
    let movieService = jasmine.createSpyObj("movieService",[])
    let subspy = spyOn(service.getMovie(movieTitle),'subscribe');
    debugger
    service.searchMovie(movieTitle);
    tick(10000);

    expect(servicespy).toHaveBeenCalledBefore(subspy);
    expect(subspy).toHaveBeenCalled();

    service.getMovie(movieTitle).subscribe(x=>{
      flush();
      expect(x).toBeGreaterThan(0);
    })
  }))

  it(`should get movie ${movieTitle} in list`,( fakeAsync(() => {
    service.searchMovie(movieTitle);
    expect(service.movies).toBeDefined();
    service.onMoviesUpdated.subscribe(x=>{
      flush();
      //expect(x).toBeGreaterThan(0);
    })


  }))
  )
});

