import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(value: string, type: string): SafeHtml {
        if (value) {
            switch (type) {
                case 'script':
                    return this.sanitizer.bypassSecurityTrustScript(value);
                default:
                    return this.sanitizer.bypassSecurityTrustHtml(value);
            }
        }
    }
}
