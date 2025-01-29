import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {
  transform(items: any[], query: string): any[] {
    if(!items) return [];
    if(!query) return items;
    query = query.toLowerCase();
    return items.filter( it => {
      //debugger
      return it.ShopName.toLowerCase().includes(query);
    });
  }
}
