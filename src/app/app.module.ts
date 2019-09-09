import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { SearchComponent } from './book/search/search.component';
import { InformationsComponent } from './informations/informations.component';
import { MyBooksComponent } from './book/my-books/my-books.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    SearchComponent,
    InformationsComponent,
    MyBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
