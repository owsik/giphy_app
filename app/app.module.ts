import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GifListComponent } from './gif-list/gif-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ GifListComponent ],
  bootstrap:    [ GifListComponent ]
})
export class AppModule {}
