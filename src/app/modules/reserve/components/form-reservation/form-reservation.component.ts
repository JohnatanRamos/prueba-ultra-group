import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseFormClass } from '../../../../core/BaseForm.class';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalButtonsComponent } from "../../../../shared/components/buttons/modal-buttons/modal-buttons.component";
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-form-reservation',
    standalone: true,
    templateUrl: './form-reservation.component.html',
    styleUrl: './form-reservation.component.scss',
    imports: [CommonModule, ReactiveFormsModule, MatInputModule, ModalButtonsComponent]
})
export class FormReservationComponent<T> extends BaseFormClass<T> implements OnInit {
  form: FormGroup = this.fb.group({
    id: [Date.now],
    room: ['', Validators.required],
    numberOfGuests: [0, [Validators.required, Validators.min(1)]],
    checkInDate: [null, Validators.required],
    checkOutDate: [null, Validators.required],
    habitation: [null, Validators.required]
  });

  ngOnInit(): void {
    if (this.modalData) {
      this.form.get('habitation')?.setValue(this.modalData.data);
      this.form.get('checkInDate')?.setValue(this.modalData.dateStart);
      this.form.get('checkOutDate')?.setValue(this.modalData.dateEnd);
    }
  }

  create() {
    this.reservationsService.createReservation(this.form.getRawValue());
    this.closeModal();
  }
}
