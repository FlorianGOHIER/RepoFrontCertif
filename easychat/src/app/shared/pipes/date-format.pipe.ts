import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: any, args?: any): any {
    return this.datePipe.transform(value, 'HH:mm dd MMMM yyyy');
  }
}
