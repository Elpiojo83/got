import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterString'
})
export class FilterStringPipe implements PipeTransform {

  transform(items: any[], term: string): any {
    return items.filter(item => item.firstName.toLowerCase().indexOf(term.toLowerCase()) !== -1 || item.lastName.toLowerCase().indexOf(term.toLowerCase()) !== -1);
  }

}
