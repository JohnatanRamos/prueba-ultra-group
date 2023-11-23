import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalButtonsComponent } from "@shared/components/buttons/modal-buttons/modal-buttons.component";
import { BaseFormClass } from '../../../../../core/BaseForm.class';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-form-habitation',
    standalone: true,
    templateUrl: './form-habitation.component.html',
    styleUrl: './form-habitation.component.scss',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCheckboxModule,
        MatFormFieldModule,
        ModalButtonsComponent,
        MatSelectModule,
    ]
})
export class FormHabitationComponent<T> extends BaseFormClass<T> implements OnInit {

  form: FormGroup = this.fb.group({
    id: [Date.now()],
    enable: [true, Validators.required],
    name: ['', Validators.required],
    baseCost: [null],
    taxes: [null],
    roomType: [''],
    location: ['', Validators.required],
    quantity: [1, [Validators.required, Validators.min(1)]],
    hotel: [null, Validators.required]
  });
  listHotels = computed(() => {
    return this.hotelesService.hoteles().filter((hotel) => hotel.enable);
  })

  ngOnInit(): void {
    if (this.modalData) {
      this.form.patchValue(this.modalData);
    }
  }

  validateAction() {
    if (this.modalData) {
      this.updateHabitation();
    } else {
      this.createHabitation();
    }
    this.closeModal();
  }

  createHabitation() {
    this.habitationsService.createHabitation(this.form.getRawValue());
  }

  updateHabitation() {
    this.habitationsService.updateHabitation(this.form.getRawValue());
  }
}
