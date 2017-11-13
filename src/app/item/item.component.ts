import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent implements OnInit {

  constructor(
    private itemService: ItemService,
  ) { }

  @Input() movie;

  ngOnInit() {
    let additionalDetail = this.itemService.matchMovieFromId(this.movie.id);
    this.movie = Object.assign(this.movie, additionalDetail);
  }

}
