import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-new-cat-dialog',
  templateUrl: './new-cat-dialog.component.html'
})
export class NewCatDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NewCatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}