import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [BsDatepickerModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  constructor(private router: Router) { }

  redirect(routePage: string): void {
    this.router.navigate(['/' + routePage]);
  }

  selectedColor: string = '';

  setColor(color: string) {
    this.selectedColor = color;
    console.log('Color seleccionado:', color);
  }

}
