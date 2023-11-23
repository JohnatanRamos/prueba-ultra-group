import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService extends StoreService {
  createReservation(reservation: Reservation) {
    this.reservations.update(state => [...state, reservation]);
  }
  
}
