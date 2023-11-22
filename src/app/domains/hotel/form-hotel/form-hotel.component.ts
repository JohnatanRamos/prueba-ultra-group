import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotelesService } from '../../../database/services/hoteles.service';
import { Hotel } from '../../../database/models/hotel';

@Component({
  selector: 'app-form-hotel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-hotel.component.html',
  styleUrl: './form-hotel.component.scss',
})
export class FormHotelComponent implements OnChanges {
  @Input({ required: false }) hotelData!: Hotel | undefined;
  @Output() onCloseForm = new EventEmitter();
  fb = inject(FormBuilder);
  bd = inject(HotelesService);

  hotelForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    city: ['', Validators.required],
    enable: false,
  });

  ngOnChanges(changes: SimpleChanges): void {
    const moodEdit = changes['hotelData'];
    if (moodEdit && this.hotelData) {
      this.hotelForm.patchValue(this.hotelData);
    }
  }

  validateAction() {
    if (this.hotelData) {
      this.updateHotel();
      return;
    }
    this.saveHotel();
  }

  saveHotel() {
    const hotel = this.hotelForm.getRawValue();
    hotel.id = Date.now();
    this.bd.createHotel(hotel);
  }

  updateHotel() {
    const hotel = this.hotelForm.getRawValue();
    hotel.id = this.hotelData?.id;
    this.bd.updateHotel(hotel);
    this.closeForm();
  }

  closeForm() {
    this.onCloseForm.emit();
  }
}
