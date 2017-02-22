import 'jquery';
import 'jqwidgets/jqwidgets/jqxcore';
import 'jqwidgets/jqwidgets/jqxdata';
import 'jqwidgets/jqwidgets/jqxbuttons';
import 'jqwidgets/jqwidgets/jqxscrollbar';
import 'jqwidgets/jqwidgets/jqxmenu';
import 'jqwidgets/jqwidgets/jqxgrid';
import 'jqwidgets/jqwidgets/jqxgrid.aggregates';
import 'jqwidgets/jqwidgets/jqxgrid.columnsreorder';
import 'jqwidgets/jqwidgets/jqxgrid.columnsresize';
import 'jqwidgets/jqwidgets/jqxgrid.edit';
import 'jqwidgets/jqwidgets/jqxgrid.export';
import 'jqwidgets/jqwidgets/jqxgrid.filter';
import 'jqwidgets/jqwidgets/jqxgrid.grouping';
import 'jqwidgets/jqwidgets/jqxgrid.pager';
import 'jqwidgets/jqwidgets/jqxgrid.selection';
import 'jqwidgets/jqwidgets/jqxgrid.sort';
import 'jqwidgets/jqwidgets/jqxgrid.storage';
import {bindable} from 'aurelia-framework';

export class MyGridCustomElement {
  @bindable gridData;

  attached() {
    let source = {
      localdata: this.gridData,
      datatype: 'array',
      datafields:
      [
          { name: 'firstname', type: 'string' },
          { name: 'lastname', type: 'string' },
          { name: 'productname', type: 'string' },
          { name: 'quantity', type: 'number' },
          { name: 'price', type: 'number' },
          { name: 'total', type: 'number' }
      ]
    };

    let dataAdapter = new $.jqx.dataAdapter(source);

    $(this.container).jqxGrid({
      width: 850,
      source: dataAdapter,
      columnsresize: true,
      columns: [
        { text: 'Name', datafield: 'firstname', width: 120 },
        { text: 'Last Name', datafield: 'lastname', width: 120 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
      ]
    });
  }
}