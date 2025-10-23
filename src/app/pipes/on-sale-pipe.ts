import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  transform(value: boolean, ...args: any[]): string {
    const [customText] = args;
    return value ? (customText || 'EM PROMOÇÃO!') : '';
  }

}