import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData'
})
export class FormatDataPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value.substr(args[0],args[1]) + '...';
  }


}
