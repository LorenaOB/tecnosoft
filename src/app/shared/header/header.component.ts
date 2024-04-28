import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { RolesPages } from '../../config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  userDescription: string = '';
  userPage: any;

  constructor(private router: Router, public usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });

    this.usersService.userDescription$.subscribe((userDescription) => {
      this.userDescription = userDescription;
    });

    this.usersService.userRole$.subscribe((userRole) => {
      this.userPage = RolesPages[userRole];
    });
  }

  redirect(routePage: string): void {
    this.router.navigate(['/' + routePage]);
  }
}
