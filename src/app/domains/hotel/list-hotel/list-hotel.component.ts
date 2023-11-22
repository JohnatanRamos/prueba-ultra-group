import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HotelesService } from '../../../database/services/hoteles.service';
import { FormHotelComponent } from '../form-hotel/form-hotel.component';
import { Hotel } from '../../../database/models/hotel';

@Component({
  selector: 'app-list-hotel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormHotelComponent],
  templateUrl: './list-hotel.component.html',
  styleUrl: './list-hotel.component.scss'
})
export class ListHotelComponent {
  public db = inject(HotelesService);
  hotelData!: Hotel | undefined;
  moodEdit = false;

  changeView(hotel?: Hotel) {
    this.moodEdit = !this.moodEdit;
    if (!this.moodEdit) {
      this.hotelData = undefined;
      return;
    }
    this.hotelData = hotel;
  }

  updateState(hotel: Hotel) {
    this.db.disabledHotel(hotel);
  }
}
