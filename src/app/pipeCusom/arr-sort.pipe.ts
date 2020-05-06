import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrSort'
})
export class ArrSortPipe implements PipeTransform {

  transform(value: number[], mode: number): number[] {
    let result:number[] = [];
    for(let i = 0; i < value.length; i++){
      for(let j = i + 1; j < value.length;j++){
        if(value[i]>value[j]){
          let tmp = value[i];
          value[i] = value[j];
          value[j] = tmp;
          }
        }
      }
    if(mode === 1){
      result = value;
    }
    if(mode === -1){
      result = value.reverse();
    }
 
    return result;
  }

}
