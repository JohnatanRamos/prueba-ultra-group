import { inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseClass } from './Base.class';
import { FormBuilder } from '@angular/forms';

export class BaseFormClass<T> extends BaseClass {
  private dialogRef = inject(MatDialogRef<T>);
  modalData = inject(MAT_DIALOG_DATA);
  fb = inject(FormBuilder);
  
  closeModal() {
    this.dialogRef.close();
  }
}
