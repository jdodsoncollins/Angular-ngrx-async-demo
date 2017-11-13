import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(
    private appService: AppService,
  ) {

  }

  ngOnInit() {
    this.appService.fetchTheaterShowTimes();
    this.appService.fetchMovieMetadata();
  }
}
