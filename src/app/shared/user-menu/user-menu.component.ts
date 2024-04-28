import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { LocalStorageNames } from '../../config';
import swal from 'sweetalert2';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css',
})
export class UserMenuComponent {
  user: any;
  userName: string = '';
  userRole: string = '';
  nameImage: string = 'user.jpg';

  txtRoleAdmin: string = 'admin';
  txtRoleClient: string = 'client';

  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {
    console.log('---> ', this.router.url);
    const userLogedIn = localStorage.getItem(LocalStorageNames.userLoggedIn) ?? '';

    if (userLogedIn != '') {
      this.user = JSON.parse(userLogedIn);

      if (this.user.role === this.txtRoleAdmin) {
        this.userName = 'Jane Clark';
        this.userRole = 'Admin';
        this.nameImage = 'admin.jpg';
      } else {
        this.userName = 'John Doe';
        this.userRole = 'Cliente';
        this.nameImage = 'user.jpg';
      }
      this.userName = this.user?.name ?? this.userName;
    } else {
      this.redirect('');
      swal.fire('Debes iniciar sesión!', '', 'warning');
    }
  }

  redirect(routePage: string): void {
    this.router.navigate(['/' + routePage]);
  }

  logout() {
    this.usersService.endSession(true);
  }
}
