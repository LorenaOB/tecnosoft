import { Component } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UserMenuComponent } from '../../shared/user-menu/user-menu.component';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css',
  imports: [BsDatepickerModule, UserMenuComponent],
})
export class AdminHomeComponent {
  selectedColor: string = '';

  constructor() {}

  setColor(color: string) {
    this.selectedColor = color;
    console.log('Color seleccionado:', color);
  }
}
