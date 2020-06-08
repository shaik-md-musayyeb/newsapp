import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TopheadlinesComponent } from './components/topheadlines/topheadlines.component';
import { SearchComponent } from './components/search/search.component';
import { AllnewsComponent } from "./components/allnews/allnews.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'topheadlines', component: TopheadlinesComponent},
  {path: 'allnews', component: AllnewsComponent},
  {path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
