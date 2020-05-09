import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private Router: Router){

  }
  title = 'Hello world';
  a: number;
  b: number;
  total: number;
  sum(): void{
    this.total = this.a + this.b;
    console.log(this.total);
  }
  isShow: boolean = false;
  show(){
    this.isShow = !this.isShow;
  }
  navigate(url: string): void{
    // this.Router.navigate([url]);
    this.Router.navigateByUrl(url);
  }
}
