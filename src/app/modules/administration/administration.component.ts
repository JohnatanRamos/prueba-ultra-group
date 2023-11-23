import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ListHotelComponent } from './components/hotel/list-hotel/list-hotel.component';
import { ReservationsComponent } from "./components/reservations/reservations.component";
import { ListHabitationComponent } from "./components/habitations/list-habitation/list-habitation.component";

@Component({
    selector: 'app-administration',
    standalone: true,
    templateUrl: './administration.component.html',
    styleUrl: './administration.component.scss',
    imports: [CommonModule, MatTabsModule, ListHotelComponent, ReservationsComponent, ListHabitationComponent]
})
export class AdministrationComponent {}
