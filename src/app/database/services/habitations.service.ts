import { Injectable, computed, signal } from '@angular/core';
import { StoreService } from './store.service';
import { Habitation } from '../models/habitation';

@Injectable({
  providedIn: 'root'
})
export class HabitationsService extends StoreService {

  createHabitation(habitation: Habitation) {
    this.habitations.update(state => [...state, habitation]);
  }

  disabledHabitation(habitation: Habitation) {
    this.habitations.update(state => {
      return state.map((item) => {
        if (item.id === habitation.id) {
          return {...habitation, enable: !item.enable};
        }
        return item;
      })
    });
  }

  updateHabitation(habitationBody: Habitation) {
    this.habitations.update(state => {
      return state.map((habitation) => {
        if (habitation.id === habitationBody.id) {
          return {...habitationBody};
        }
        return habitation;
      })
    });
  }
}
