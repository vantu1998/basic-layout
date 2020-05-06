import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'sortName'
})
export class SortNamePipe implements PipeTransform {

  transform(users: any[], mode: number): any[] {
    let result: any[];
  
    return result;

  }

}
