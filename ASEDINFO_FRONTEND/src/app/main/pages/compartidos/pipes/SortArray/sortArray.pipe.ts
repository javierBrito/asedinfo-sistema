import { Pipe, PipeTransform } from '@angular/core';
import { orderBy, forEach } from 'lodash';
@Pipe({
  name: 'sortArray'
})
export class SortArrayPipe implements PipeTransform {

  transform(value: object[], sortFunction?: any): any[] {
    return value.sort(sortFunction);
  }

}
