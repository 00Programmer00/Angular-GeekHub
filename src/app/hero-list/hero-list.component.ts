import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: object[];
  title = 'Hello Hero List';
  titleStyles = {
    color: 'green',
    fontSize: '40px',
    margin: 0,
    textAlign: 'center'
  }

  constructor() {
  }

  selectHero(hero) {
    console.log('Hero name: ', hero.name);
    console.log('Hero power: ', hero.heroPower);
  }

  ngOnInit() {
    this.heroes = [{
      name: 'First Hero',
      heroPower: 'Fly'
    }, {
      name: 'Second Hero',
      heroPower: 'Laser'
    }, {
      name: 'Third Hero',
      heroPower: 'Invisibility'
    }];
  }

}
