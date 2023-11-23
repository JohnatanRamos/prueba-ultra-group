import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-buttons',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './modal-buttons.component.html',
  styleUrl: './modal-buttons.component.scss'
})
export class ModalButtonsComponent {
  @Input({ required: true }) disabledButton: boolean = false;
  @Output() onSaveModal = new EventEmitter();

  handlerSave() {
    this.onSaveModal.emit();
  }
}
