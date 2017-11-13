import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs/Rx';
import { Movie } from '../model/movie';
import { Theater } from '../model/theater';

@Injectable()
export class AppService {

  // require json files for treatment as network responses below
  readonly movie_metadata = require('../assets/data/movie_metadata.json');
  readonly theater_showtimes = require('../assets/data/theater_showtimes.json');

  // BehaviorSubject needed for intial broadcast of empty class object due to ng issue with async looping not loading if looped async items are initially null
  public theatersSource = new BehaviorSubject<Theater[]>([new Theater("")]);
  public theaters$ = this.theatersSource.asObservable();
  public moviesSource = new BehaviorSubject<Movie[]>([new Movie("")]);
  public movies$ = this.moviesSource.asObservable();

  constructor(
  ) { 
  }

  public fetchMovieMetadata() {
    // create into an Observable, so that it behaves as if it was from an API response
    return Observable.of(this.movie_metadata)
    .subscribe((res) => {
      let movies = []
        res.forEach((movieRaw) => {
          movies.push(Movie.fromApiResponse(movieRaw));
        })
        console.log("movie class objects for broadcast:", movies);
        this.moviesSource.next(movies);    
    });
  };

  public fetchTheaterShowTimes() {
    return Observable.of(this.theater_showtimes)
    .subscribe((res) => {
      let theaters = []
      res.forEach((showtimesRaw) => {
        theaters.push(Theater.fromApiResponse(showtimesRaw));
      })
      console.log("theater class objects for broadcast:", theaters);
      this.theatersSource.next(theaters);
    });
  };

}
