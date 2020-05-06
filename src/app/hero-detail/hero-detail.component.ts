import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }
  @Output() outToParent = new EventEmitter<string>();
  inputText: string = "abc";
  ngOnInit(): void {
  }
  send(): void{
    this.outToParent.emit(this.inputText);
  }
  
}
