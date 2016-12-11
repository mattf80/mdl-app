import { Grape } from './../models/grape';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'listFilter'
})

export class ListFilterPipe implements PipeTransform {

  transform(value: Array<any>, filterBy: string): Array<any> {
    filterBy = filterBy ? filterBy.toLowerCase() : null;
    return filterBy ? value.filter((item: any) =>
    item.item.name.toLowerCase().indexOf(filterBy) !== -1) : value;
  }
}