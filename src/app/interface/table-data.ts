import { TableField } from './table-field';
import {TableValue} from './table-value';
export interface TableData {
    fields: Array<TableField>;
    data: Array<Array<TableValue>>;
}
