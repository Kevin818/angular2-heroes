import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../heroes/hero-detail/hero-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/detail/:id', component: HeroDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
