import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'roundTwoPlace'
})
export class RoundTwoPlacePipe implements PipeTransform {

    transform(value: number): number {
        if (!value) {
            return 0.00;
        } else {
            return Math.round(value * 100) / 100;
        }
    }

}
