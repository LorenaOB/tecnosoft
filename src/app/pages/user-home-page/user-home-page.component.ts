import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, NavigationEnd } from '@angular/router';
import { delay, filter } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


@Component({
  selector: 'app-user-home-page',
  standalone: true,
  imports: [MatIconModule, MatSidenavModule, MatDividerModule, MatToolbarModule],
  templateUrl: './user-home-page.component.html',
  styleUrl: './user-home-page.component.css',
})
export class UserHomePageComponent {
  constructor(private router: Router) { }

  redirect(routePage: string): void {
    this.router.navigate(['/' + routePage]);
  }

}
