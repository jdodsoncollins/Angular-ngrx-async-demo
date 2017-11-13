import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../../model/movie';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(movies: Movie[], movieTitleText: string): Movie[] {
    if (!movies) { 
        return [] 
    };
    if (!movieTitleText) { 
        return movies 
    };
    return movies.filter( movie => {
        return movie.title.toLowerCase().includes(movieTitleText.toLowerCase());
    });
   }
}