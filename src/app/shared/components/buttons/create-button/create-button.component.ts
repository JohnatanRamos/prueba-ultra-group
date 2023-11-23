import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './create-button.component.html',
  styleUrl: './create-button.component.scss'
})
export class CreateButtonComponent {
  @Output() onCreate = new EventEmitter();
  
  handlerCreate() {
    this.onCreate.emit();
  }
}
