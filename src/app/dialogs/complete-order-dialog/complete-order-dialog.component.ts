import { Component, Inject } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-complete-order-dialog',
  templateUrl: './complete-order-dialog.component.html',
  styleUrls: ['./complete-order-dialog.component.scss']
})
export class CompleteOrderDialogComponent extends BaseDialog<CompleteOrderDialogComponent> {

  constructor(dialogRef: MatDialogRef<CompleteOrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CompleteOrderState) {

    super(dialogRef)
  }

  complete() {

  }
}

export enum CompleteOrderState {
  Yes,
  No
}
