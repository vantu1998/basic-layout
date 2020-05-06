import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})

export class PipeComponent implements OnInit {
  upperCaseInput: string = ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
  lowerCaseInput = `LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY.`;
  sliceText: string = 'Learn Angular 4';
  amount: number = 35.45655454;
  result: number = 0.456789;
  names: string[] = ['abc','xyz','khanh','thuy','tu'];
  currency: number = 80.5;
  date: number = Date.now();
  abc = {
    name:'Tu',
    age:'18',
    email:'vantu1998@gmail.com'
  }
  constructor() {
    console.log(this.date);
  }

  ngOnInit(): void {
  }

}
