import { Component, EventEmitter, Output, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { StoreService } from '../../../database/services/store.service';
import { Habitation } from '../../../database/models/habitation';
import { Reservation } from '../../../database/models/reservation';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Output() onHandlerDates = new EventEmitter<{dateEnd: Date, dateStart: Date}>();
  bd = inject(StoreService);
  form = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
    city: new FormControl<string | null>(null),
    amount: new FormControl<number | null>(null),
  });

  reservations = computed(() => {
    const reservationsList = this.bd.reservations();
    return [...reservationsList];
  });
  habitations = this.bd.habitations();

  filter() {
    if (this.reservations().length === 0) {
      this.doFilterH(this.habitations);
    }
    this.doFilterR(this.reservations());
  
    this.onHandlerDates.emit({
      dateEnd: this.form.get('end')?.value!,
      dateStart: this.form.get('start')?.value!,
    });
  }

  doFilterR(list: Reservation[]) {
    const {city, amount, start, end} = this.form.getRawValue();
    let newList = [...list];
    if (city) {
      newList = list.filter((item) => item.habitation.hotel.city === city);
    }
    if (amount) {
      newList = list.filter((item) => item.habitation.quantity >= amount);
    }
    const notReservation = this.validateRangeDates(newList);
    this.getHabitations(notReservation);
  }

  validateRangeDates(list: Reservation[]) {
    const dateEnd = this.convertDate(this.form.get('end')?.value!);
    const dateStart = this.convertDate(this.form.get('start')?.value!);

    return list.filter((reservation) => {
      const checkInDate = this.convertDate(reservation.checkInDate);
      const checkOutDate = this.convertDate(reservation.checkOutDate);

      if (dateStart === checkInDate || dateStart === checkOutDate) {
        return reservation;
      }

      if (dateEnd === checkInDate || dateEnd === checkOutDate) {
        return reservation;
      }

      if (dateStart >= checkInDate && dateEnd <= checkOutDate) {
        return reservation;
      }

      if (checkInDate >= dateStart && checkOutDate <= dateEnd) {
        return reservation;
      }
      return null;
    });
  }

  convertDate(date: Date) {
    return date.getTime()/1000;
  }

  getHabitations(list: Reservation[]) {
    if (list.length === 0) {
      const habitationsEnable = this.habitations.filter((item) => item.enable);
      this.bd.filterHabitations.set([...habitationsEnable]);
      return;
    }
    let habitations = [...this.habitations];
    habitations = habitations.filter((item) => {
      return list.find((reservation) => reservation.habitation.id !== item.id && item.enable)
    });
    this.bd.filterHabitations.set([...habitations]);
  }

  doFilterH(list: Habitation[]) {
    const {city, amount } = this.form.getRawValue();
    let newList = [...list];
    if (city) {
      newList = newList.filter((item) => item.hotel.city === city);
    }
    if (amount) {
      newList = newList.filter((item) => amount <= item.quantity);
    }
    newList = newList.filter((item) => item.enable);
    this.bd.setFilters(newList)
  }
}
