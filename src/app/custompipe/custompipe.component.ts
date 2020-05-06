import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {
  @ViewChild('phone') phone : ElementRef;
  text: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
  users: any[] = [
    {
      name: 'Nguyễn Xuân Thụy',
      status: true,
      id: 1
    },
    {
      name: 'Hà Văn Hiếu',
      status: true,
      id: 2
    },
    {
      name: 'Lại Tuấn Khanh',
      status: false,
      id: 3
    },
    {
      name: 'Phạm Hải Nam',
      status: false,
      id: 4
    },
    {
      name: 'Phạm Văn Đủ',
      status: false,
      id: 5
    },
    {
      name: 'fuck',
      status: false,
      id: 6
    }
    
  ]
  abc: any[];
  name: string;
  id: string;
  status: string = 'true';  
  arrNumber: number[] = [1,8,9,5,2,3,6,4,7,8,5,2];
  constructor() { }
  ngOnInit(): void {
    this.abc = _.orderBy(this.users, ['name'], ['desc']);
    console.log(this.abc);
  }

  log(name): void{
    console.log(name)
  }
  logCom(): void{
    console.log(this.phone.nativeElement.value);
  }
}
