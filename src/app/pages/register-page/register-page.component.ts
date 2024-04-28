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
import { Utilities } from '../../shared/utilities';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../model/User';
import swal from'sweetalert2';

@Component({
  selector: 'app-register-page',
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
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  registerForm!: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    public utilities: Utilities,
    private usersService: UsersService
  ) {
    this.registerForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  registerUser() {
    if (this.registerForm.valid) {
      let user: User = new User();
      user.name = this.registerForm.get('name')?.value;
      user.email = this.registerForm.get('email')?.value;
      user.password = this.registerForm.get('password')?.value;
      user.role = 'client';

      const result: boolean = this.usersService.createUser(user);

      if (result) {
        swal.fire('Usuario creado exitosamente!', '', 'info');
      } else {
        swal.fire('El usuario ya existe!', '', 'warning');
      }
      
    } else {
      swal.fire('Por favor diligencia correctamente el formulario!', '', 'error');
    }
  }

  hasErrors(field: string, typeError: string) {
    // return this.utilities.hasErrors(field, typeError, this.registerForm);
    // console.log('formulario:: ', this.registerForm.get(field));
    return (
      this.registerForm.get(field)?.hasError(typeError) &&
      this.registerForm.get(field)?.touched
    );
  }
}
