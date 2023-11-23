import { Injectable, signal } from '@angular/core';
import { Habitation } from '../models/habitation';
import { Hotel } from '../models/hotel';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  hoteles = signal<Hotel[]>([]);
  habitations = signal<Habitation[]>([]);
  reservations = signal<Reservation[]>([]);
  filterHabitations = signal<any[]>([]);

  setFilters(body: Habitation[]) {
    this.filterHabitations.set([...body]);
  }
}
