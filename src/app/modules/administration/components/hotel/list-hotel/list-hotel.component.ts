import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormHotelComponent } from '../form-hotel/form-hotel.component';
import { Hotel } from '../../../../../database/models/hotel';
import { BaseClass } from '../../../../../core/Base.class';
import { CreateButtonComponent } from "@shared/components/buttons/create-button/create-button.component";


@Component({
    selector: 'app-list-hotel',
    standalone: true,
    templateUrl: './list-hotel.component.html',
    styleUrl: './list-hotel.component.scss',
    imports: [CommonModule, ReactiveFormsModule, FormHotelComponent, CreateButtonComponent]
})
export class ListHotelComponent extends BaseClass {
  changeStateHotel(hotel: Hotel) {
    this.hotelesService.disabledHotel(hotel);
  }

  manageModal(dataHotel?: Hotel) {
    this.openModal(FormHotelComponent, dataHotel);
  }
}
