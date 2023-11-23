import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalButtonsComponent } from '@shared/components/buttons/modal-buttons/modal-buttons.component';
import { BaseFormClass } from '../../../../../core/BaseForm.class';

@Component({
  selector: 'app-form-hotel',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ModalButtonsComponent,
  ],
  templateUrl: './form-hotel.component.html',
  styleUrl: './form-hotel.component.scss',
})
export class FormHotelComponent<T> extends BaseFormClass<T> implements OnInit {
  form: FormGroup = this.fb.group({
    id: [Date.now()],
    name: ['', Validators.required],
    city: ['', Validators.required],
    enable: false,
  });

  ngOnInit(): void {
    if (this.modalData) {
      this.form.patchValue(this.modalData);
    }
  }

  validateAction() {
    if (this.modalData) {
      this.update();
    } else {
      this.create();
    }
    this.closeModal();
  }

  create() {
    this.hotelesService.createHotel(this.form.getRawValue());
  }

  update() {
    this.hotelesService.updateHotel(this.form.getRawValue());
  }
}
