import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  isSlt: boolean = true;
  dataFromChild: any[]=[];
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroService: selected hero id=${hero.id}`);
  }
  
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  trackByFunction(index: number,item: Hero): number { return item.id}
  change(): void {
    this.isSlt = !this.isSlt;
  }
  nhan(inputText:string): void {
    this.dataFromChild.push(inputText);
    console.log(inputText);
  }
}
