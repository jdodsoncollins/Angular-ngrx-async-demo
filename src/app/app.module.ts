import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ListComponent } from './list/list.component';
import { ItemComponent }  from './item/item.component';
import { ListService }  from './list/list.service';
import { ItemService } from './item/item.service';
import { FilterPipe } from './list/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    AppService,
    ListService,
    ItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
