import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

declare var itemDetails: any;
declare var itemDescription: any;
declare var itemPrice: any;
declare var itemPicture: any;

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  itemPicA:string = "assets/images/item" + String(this.route.snapshot.paramMap.get('id')) + ".png";

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  //Function is invoked immediately after Angular has completed initialization of the component's view
  ngAfterViewInit(){
    itemDetails(Number(this.route.snapshot.paramMap.get('id')));
 }
}