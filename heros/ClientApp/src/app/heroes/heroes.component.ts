import { Component, Inject, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})



export class HeroesComponent implements OnInit {


  constructor(private heroService: HeroService) {
  }

  heroes: Array<Hero> = [];

  ngOnInit(): void {
    this.getHeroes();
  };

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  currentHero: Hero;

  onSelect(hero: Hero): void {
    this.currentHero = hero;
  }

}
