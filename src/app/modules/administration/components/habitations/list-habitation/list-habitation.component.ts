import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Habitation } from '../../../../../database/models/habitation';
import { FormHabitationComponent } from '../form-habitation/form-habitation.component';
import { BaseClass } from '../../../../../core/Base.class';
import { CreateButtonComponent } from "@shared/components/buttons/create-button/create-button.component";

@Component({
    selector: 'app-list-habitation',
    standalone: true,
    templateUrl: './list-habitation.component.html',
    styleUrl: './list-habitation.component.scss',
    imports: [CommonModule, MatDialogModule, MatButtonModule, CreateButtonComponent]
})
export class ListHabitationComponent extends BaseClass {

  changeStateHabitation(habitation: Habitation) {
    this.habitationsService.disabledHabitation(habitation);
  }

  manageModal(dataHabitation?: Habitation) {
    this.openModal(FormHabitationComponent, dataHabitation);
  }
}
