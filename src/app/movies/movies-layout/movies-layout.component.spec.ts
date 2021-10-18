import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieService } from '../services/movie.service';

import { MoviesLayoutComponent } from './movies-layout.component';

describe('MoviesLayoutComponent', () => {
  let component: MoviesLayoutComponent;
  let fixture: ComponentFixture<MoviesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesLayoutComponent ], providers:[MovieService],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
