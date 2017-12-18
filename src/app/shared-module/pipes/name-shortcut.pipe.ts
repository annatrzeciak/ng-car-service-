import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameShortcut'
})
export class NameShortcutPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    } else {
      return value.charAt(0) + '.';
    }
  }

}
