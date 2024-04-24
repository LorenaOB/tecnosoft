import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css'
})
export class ServicesPageComponent {

  constructor(private router: Router) { }

  redirect(routePage: string): void {
    this.router.navigate(['/' + routePage]);
  }
}
