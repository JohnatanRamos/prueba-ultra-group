import { inject } from "@angular/core";
import { HabitationsService } from "../database/services/habitations.service";
import { ReservationsService } from "../database/services/reservations.service";
import { HotelesService } from "../database/services/hoteles.service";
import { MatDialog } from "@angular/material/dialog";
import { ComponentType } from "@angular/cdk/portal";

export class BaseClass {
  protected dialog = inject(MatDialog);
  protected habitationsService = inject(HabitationsService);
  protected reservationsService = inject(ReservationsService);
  protected hotelesService = inject(HotelesService);

  openModal(modal: ComponentType<unknown>, data?: unknown) {
    this.dialog.open(modal, {
      hasBackdrop: true,
      data
    });
  }
}