import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework15Component } from './homework15/homework15.component';
import { SearchPipe } from './homework15/search.pipe';
import { SortPipe } from './homework15/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Homework15Component,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
