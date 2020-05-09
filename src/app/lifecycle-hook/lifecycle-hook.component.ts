import { Component, OnInit, OnDestroy, Input, OnChanges,AfterContentInit,AfterContentChecked,ContentChild,ElementRef } from '@angular/core';


@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit, OnDestroy, OnChanges,AfterContentChecked,AfterContentInit {
  @Input() total: number;
  @ContentChild('content') elm: ElementRef;
  constructor() {
    console.log('contructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngOnChanges(): void { 
    console.log('ngOnChanges');
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit:",this.elm);
  }
  ngAfterContentChecked(): void {
    console.log('ngaftercontentchecked');
  }

}
