import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sortByOrder'
})
export class SortByOrderPipe implements PipeTransform {

  transform(value: any[]): any[] {
    return value.sort((n1,n2) =>
    {
      return n2.stargazers_count - n1.stargazers_count;

    });
  }
}
