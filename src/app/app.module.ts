import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FiltersComponent } from './filters/filters.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FiltersComponent, FilterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
