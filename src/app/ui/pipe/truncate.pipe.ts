import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

    transform(value: any, length?: number): string {
        let valueTransformed = value.toString();
        if (valueTransformed.length <= length) {
            return value;
        }
        else {
            valueTransformed = value.substr(0, length - 3) + '...';
            return valueTransformed;
        }
    }

}
