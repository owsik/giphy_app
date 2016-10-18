import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { GifListComponent } from './gif-list/gif-list.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ GifListComponent ],
  bootstrap:    [ GifListComponent ]
})
export class AppModule {}
