import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { ListService } from './list.service';
import { Theater } from '../../model/theater';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  constructor(
    private appService: AppService,
    private listService: ListService,
  ) { 
    this.theaters$ = this.appService.theaters$.subscribe((res) => {
      // select first theater class object once they are broadcast
      this.selectTheater(res[0]);
    })
  }

  theaters$: Subscription;
  selectedTheater: Theater;

  ngOnInit() {
  }

  selectTheater(theater: Theater) {
    this.selectedTheater = theater;
  }

  ngOnDestroy() {
    this.theaters$.unsubscribe();
  }

}
