import {
    Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input,
    AfterViewInit, Type
} from '@angular/core';
import {TableField} from '../../../../interface/table-field';
import {AddHostDirective} from '../../develop/add-host.directive';
import {ComponentSlotDirective} from '../component-slot.directive';

@Component({
    selector: 'app-tb-cell',
    templateUrl: 'tb-cell.component.html',
    styleUrls: ['tb-cell.component.scss']
})
export class TbCellComponent implements OnInit, AfterViewInit {
    @Input() field: TableField;
    @Input() data: any;
    @Input() index: number;
    @ViewChild(ComponentSlotDirective) ahd: ComponentSlotDirective;

    constructor(private cfr: ComponentFactoryResolver) {
    }

    ngOnInit() {
    }

    // ng2组件初始化是自上而下的，所以要在子组件视图初始化之后才能拿到 view child
    ngAfterViewInit() {
        if (this.field.type === 'operation') {
            this.createComponentWithParams(this.data.components);
        }
    }

    createComponentWithParams(components: Array<{type: any, options: object}>) {
        setTimeout(() => {
            components.forEach((component) => {
                const factory = this.cfr.resolveComponentFactory(component.type);
                const vcr: ViewContainerRef = this.ahd.getViewContainerRef();
                vcr.clear();
                // what kind of component cannot be sure, so <any> cast is essential
                (<any>vcr.createComponent(factory).instance).options = this.data.options;
            });
        }, 0);
    }
}
