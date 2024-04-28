import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UsersService } from '../../services/users/users.service';
import { UserMenuComponent } from '../../shared/user-menu/user-menu.component';

@Component({
  selector: 'app-user-home-page',
  standalone: true,
  templateUrl: './user-home-page.component.html',
  styleUrl: './user-home-page.component.css',
  imports: [
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    UserMenuComponent,
  ],
})
export class UserHomePageComponent {
  [x: string]: any;

  constructor(private router: Router, private usersService: UsersService) {}

  redirect(routePage: string): void {
    this.router.navigate(['/' + routePage]);
  }
}
