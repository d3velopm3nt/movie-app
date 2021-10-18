import { SearchTypePipe } from './search-type.pipe';

describe('SearchTypePipe', () => {
  it('create an instance', () => {
    const pipe = new SearchTypePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return value of movie-type',() =>{
    const pipe = new SearchTypePipe();
    expect(pipe.transform("movie")).toEqual("movie-type");
  })

  it('should return value of series-type',() =>{
    const pipe = new SearchTypePipe();
    expect(pipe.transform("series")).toEqual("series-type");
  })

  it('should return value of episode-type',() =>{
    const pipe = new SearchTypePipe();
    expect(pipe.transform("episode")).toEqual("episode-type");
  })
});
