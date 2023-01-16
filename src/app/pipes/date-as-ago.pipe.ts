import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAsAgo'
})
export class DateAsAgoPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    if (!value) { return 'a long time ago'; }

    let time = (Date.now() - Date.parse(value)) / 1000;

    if (time < 10) {
      return 'just now';
    } else if (time < 60) {
      return 'a moment ago';
    }

    const divider = [60, 60, 24, 30, 12];
    const string = [' segundo', ' minuto', ' hora', ' dia', ' mes', ' ano'];

    let i;
    for (i = 0; Math.floor(time / divider[i]) > 0; i++) {
      time /= divider[i];
    }
    const plural = i === 4 ? 'es' : Math.floor(time) > 1 ? 's' : '';

    return Math.floor(time) + string[i] + plural + ' atrás';
  }
}