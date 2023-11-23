import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class HotelesService extends StoreService {

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
