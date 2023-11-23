import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from "../../shared/components/filter/filter.component";
import { BaseClass } from '../../core/Base.class';
import { StoreService } from '../../database/services/store.service';
import { Habitation } from '../../database/models/habitation';
import { FormReservationComponent } from './components/form-reservation/form-reservation.component';

@Component({
    selector: 'app-reserve',
    standalone: true,
    templateUrl: './reserve.component.html',
    styleUrl: './reserve.component.scss',
    imports: [CommonModule, FilterComponent]
})
export class ReserveComponent extends BaseClass {
    bdService = inject(StoreService);
    list = this.bdService.filterHabitations();
    dateEnd!: Date;
    dateStart!: Date;

    manageModal(data?: Habitation) {
        this.openModal(FormReservationComponent, {
            dateEnd: this.dateEnd,
            dateStart: this.dateStart,
            data
        });
    }

    setDates(dates: {dateEnd: Date, dateStart: Date}) {
        this.dateEnd = dates.dateEnd;
        this.dateStart = dates.dateStart;
    }
}
