import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crediCardNumberFormatter'
})
export class CrediCardNumberFormatterPipe implements PipeTransform {

  transform(cardNumber:string): string {
    return cardNumber.replace(/(\d{4})(?=\d)/g, '$1 - ');
  }

}
