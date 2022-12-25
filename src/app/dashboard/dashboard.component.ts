import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

declare var topItems: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  heroes2: Hero[] = [];
  heroes3: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getHeroes2();
    this.getHeroes3();
  }

  getHeroes(): void {
    var nums:number[] = topItems();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(nums[0]-1, nums[0]));
  }

  getHeroes2(): void {
    var nums:number[] = topItems();
    this.heroService.getHeroes()
      .subscribe(heroes2 => this.heroes2 = heroes2.slice(nums[1]-1, nums[1]));
  }

  getHeroes3(): void {
    var nums:number[] = topItems();
    this.heroService.getHeroes()
      .subscribe(heroes3 => this.heroes3 = heroes3.slice(nums[2]-1, nums[2]));
  }
}
