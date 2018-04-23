import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TbCellComponent } from './tb-cell/tb-cell.component';
import { ThCellComponent } from './th-cell/th-cell.component';
import { RouterModule } from '@angular/router';
import { PagingComponent } from './paging/paging.component';
import { FormsModule } from '@angular/forms';
import { ComponentSlotDirective } from './component-slot.directive';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule],
    declarations: [
        TableComponent,
        TbCellComponent,
        ThCellComponent,
        PagingComponent,
        ComponentSlotDirective
    ],
    exports: [
        TableComponent
    ]
})
export class TableModule {
    /**
     * @function
     * @param entryComponents
     * @returns {{ngModule: TableModule, providers: [{provide: OpaqueToken, useValue: Array<any>, multi: boolean}]}}
     */
    static withEntryComponents(entryComponents: Array<any>) {
        return {
            ngModule: TableModule,
            providers: [
                {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entryComponents, multi: true}
            ]
        };
    }
}
