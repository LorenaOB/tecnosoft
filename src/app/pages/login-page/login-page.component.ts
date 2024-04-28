import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { RolesPages } from '../../config';
import { User } from '../../model/User';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgClass,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  hasErrors(field: string, typeError: string) {
    return (
      this.loginForm.get(field)?.hasError(typeError) &&
      this.loginForm.get(field)?.touched
    );
  }

  async loginValidate() {
    if (this.loginForm.valid) {
      const user: User = this.usersService.validateCredentials(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      );

      if (user?.email === undefined) {
        swal.fire('Usuario o contraseña incorrecta!', '', 'error');
      } else if (user.active) {
        if (user?.role === undefined) {
          swal.fire('El usuario no tiene un rol asignado!', '', 'warning');
        } else {
          this.redirect(RolesPages[user?.role]);
        }
      } else {
        swal.fire('El usuario se encuentra inactivo!', '', 'warning');
        this.usersService.endSession();
      }
    } else {
      swal.fire(
        'Por favor diligencia correctamente el formulario!',
        '',
        'error'
      );
    }
  }

  redirect(routePage: string): void {
    this.router.navigate(['/' + routePage]);
  }
}
