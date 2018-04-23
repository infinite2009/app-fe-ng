import {Directive, Input, OnInit, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appAddHost]'
})
export class AddHostDirective implements OnInit {

    @Input() value;

    constructor(private viewContainerRef: ViewContainerRef) {
    }

    getViewContainerRef() {
        return this.viewContainerRef;
    }

    ngOnInit() {
        console.log(`I'm add host directive: ${this.value}`);
        console.log(this.value);
    }
}
