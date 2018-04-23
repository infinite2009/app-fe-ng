import { Component, OnInit } from '@angular/core';
import {TableData} from '../../../../interface/table-data';
import {ChildComponent} from '../../../../ui/component/develop/child/child.component';

@Component({
  selector: 'app-table-playground',
  templateUrl: './table-playground.component.html',
  styleUrls: ['./table-playground.component.scss']
})
export class TablePlaygroundComponent implements OnInit {
    tableData: TableData;

  constructor() { }

  ngOnInit() {
      // TODO
      this.tableData = {
          fields: [
              {
                  id: '1',
                  label: '测试字段',
                  sortable: false,
                  type: 'text'
              },
              {
                  id: '2',
                  label: '',
                  sortable: false,
                  type: 'operation'
              }
          ],
          data: [
              [
                  {
                      text: '测试文本',
                      rawValue: '测试文本',
                      type: 'text'
                  },
                  {
                      text: '测试文本',
                      options: {},
                      type: 'operation',
                      components: [
                          {
                              type: ChildComponent,
                              options: {}
                          },

                      ]
                  }
              ]
          ]
      };
  }

}
