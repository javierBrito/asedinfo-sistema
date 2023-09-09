import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupbypipe'
})
export class GroupByPipePipe implements PipeTransform {

  transform(objects: object[], id: string): any {

    const countedObjects: object[] = [];

    for (const objecto of objects) {
      const countObject: any = countedObjects.find(obj => obj[id] === objecto[id]);
      if (countObject) {
        countObject.count++;
      }else{
        countedObjects.push({...objecto, count: 1});
      }
    }

    return countedObjects;
  }
}
