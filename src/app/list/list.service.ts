import { Injectable } from '@angular/core';
import { AppService } from '../app.service';

@Injectable()
export class ListService {

  constructor(
    private appService: AppService
  ) { 
  }
}
