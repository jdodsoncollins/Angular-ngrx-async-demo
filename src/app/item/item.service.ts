import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs/Subscription';
import { Movie } from '../../model/movie';

@Injectable()
export class ItemService {

  constructor(
    private appService: AppService
  ) { 
    this.movies$ = this.appService.movies$.subscribe((res) => {
      this.movies = res;
    })
  }

  movies$: Subscription;
  movies: Movie[];

  matchMovieFromId(movieId: string) {
    if (this.movies) {
      return this.movies.filter((movie) => movie.id === movieId)[0] || false
    }
  }
}
