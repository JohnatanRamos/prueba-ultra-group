import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseClass } from '../../../../core/Base.class';

@Component({
    selector: 'app-reservations',
    standalone: true,
    templateUrl: './reservations.component.html',
    styleUrl: './reservations.component.scss',
    imports: [CommonModule]
})
export class ReservationsComponent extends BaseClass {

}
