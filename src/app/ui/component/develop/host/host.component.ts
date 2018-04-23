import {
    AfterViewInit, Component, ComponentFactoryResolver, forwardRef, Inject, OnInit, QueryList, Type, ViewChild,
    ViewChildren,
    ViewContainerRef
} from '@angular/core';
import {AddHostDirective} from '../add-host.directive';
import {ChildComponent} from '../child/child.component';

@Component({
    selector: 'app-host',
    templateUrl: './host.component.html',
    styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit, AfterViewInit {
    @ViewChildren(AddHostDirective) ad: QueryList<AddHostDirective>;
    @ViewChildren('anchor', {read: ViewContainerRef}) ad2: QueryList<ViewContainerRef>;

    value = '123123';

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        setTimeout(() => {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
            this.ad.forEach((ad: AddHostDirective, i: number) => {
                const viewContainerRef = ad.getViewContainerRef();
                viewContainerRef.clear();
                // 异步地给动态加载的子组件做属性绑定，以避免在一个生命周期内两次修改属性的值
                const componentRef = viewContainerRef.createComponent(componentFactory);
                (<ChildComponent>componentRef.instance).content = `I\'m child content: P element! My index is ${i}`;
            });
            this.ad2.forEach((vcr: ViewContainerRef, i: number) => {
                (<ChildComponent>vcr.createComponent(componentFactory).instance).content = `I\' created by anchor: ${i}`;
            });
        }, 0);
    }

    printLog() {
        console.log(`I'm a piece of log printed by Host`);
    }

}
