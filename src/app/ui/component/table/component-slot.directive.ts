import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appComponentSlot]'
})
export class ComponentSlotDirective {

    constructor(private vcr: ViewContainerRef) {
    }

    getViewContainerRef() {
        return this.vcr;
    }
}
