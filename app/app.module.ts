import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { GifListComponent } from './gif-list/gif-list.component';
import { GifComponent } from './gif-list/gif/gif.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ GifListComponent, GifComponent ],
  bootstrap:    [ GifListComponent ]
})
export class AppModule {}
