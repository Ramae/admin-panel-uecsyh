import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input('gridData') providedData: any;
  @Input('gridColumns') providedColumns: any;
  private allColumns: Array<string>;
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.allColumns = [...this.providedColumns, 'actions'];
  }

  _onEdit(_video: any) {
    this.onEdit.emit(_video);
  }
  _onDelete(_video: any) {
    this.onDelete.emit(_video);
  }
}