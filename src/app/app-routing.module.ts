import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './book/search/search.component';
import { MyBooksComponent } from './book/my-books/my-books.component';
import { InformationsComponent } from './informations/informations.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'myBooks',component:MyBooksComponent},
  {path:'informations',component:InformationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
