import { Injectable, signal } from '@angular/core';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {
  hoteles = signal<Hotel[]>([]);

  createHotel(hotel: Hotel) {
    this.hoteles.update(state => [...state, hotel]);
  }

  updateHotel(hotelBody: Hotel) {
    this.hoteles.update(state => {
      return state.map((hotel) => {
        if (hotel.id === hotelBody.id) {
          return {...hotelBody};
        }
        return hotel;
      })
    });
  }

  disabledHotel(hotelBody: Hotel) {
    this.hoteles.update(state => {
      return state.map((hotel) => {
        if (hotel.id === hotelBody.id) {
          return {...hotelBody, enable: !hotel.enable};
        }
        return hotel;
      })
    });
  }
}
