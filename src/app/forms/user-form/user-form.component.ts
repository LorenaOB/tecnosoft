import { Component, Inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { User } from '../../model/User';
import { UsersService } from '../../services/users/users.service';
import { Utilities } from '../../shared/utilities';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import swal from 'sweetalert2';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgClass,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  userForm!: FormGroup;
  tittle: string = '';
  txtButtom: string = '';

  statusList = [
    { key: true, value: 'Activo' },
    { key: false, value: 'Inactivo' }
  ];

  rolesList = [
    { key: 'admin', value: 'Admin' },
    { key: 'client', value: 'Cliente' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    public utilities: Utilities,
    private usersService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
      active: ['', [Validators.required]],
      password: ['', []],
    });
  }

  ngOnInit(): void {
    if (this.data?.action === 'edit') {
      this.tittle = 'Editar Usuario';
      this.txtButtom = 'Actualizar';
      this.getUser(this.data?.userEmail);
    } else {
      this.tittle = 'Nuevo Usuario';
      this.txtButtom = 'Crear';
      this.userForm.get('password')?.setValue('12345678'); // Contraseña por defecto
    }
  }

  manageUser() {
    if (this.userForm.valid) {
      let user: User = new User();
      user.name = this.userForm.get('name')?.value;
      user.email = this.userForm.get('email')?.value;
      user.role = this.userForm.get('role')?.value;
      user.active = this.userForm.get('active')?.value;
      user.password = this.userForm.get('password')?.value;

      if (this.data?.action === 'edit') this.editUser(user);
      else this.addUser(user);
    } else {
      swal.fire(
        'Por favor diligencia correctamente el formulario!',
        '',
        'error'
      );
      return;
    }
  }

  getUser(email: string) {
    let user: User = this.usersService.getUser(email);

    if (user?.email) {
      // Si el usuario existe
      this.userForm.get('name')?.setValue(user.name);
      this.userForm.get('email')?.setValue(user.email);
      this.userForm.get('role')?.setValue(user.role);
      this.userForm.get('active')?.setValue(user.active);
      this.userForm.get('password')?.setValue(user.password);
    }
  }

  addUser(user: User) {
    const result: boolean = this.usersService.createUser(user);

    if (result) {
      swal.fire('Usuario creado exitosamente!', '', 'info');
    } else {
      swal.fire(
        'Ya existe un usuario registrado con ese email!',
        '',
        'warning'
      );
    }
  }

  editUser(user: User) {
    const result: boolean = this.usersService.editUser(
      this.data?.userEmail,
      user
    );

    if (result) {
      swal.fire('Usuario actualizado exitosamente!', '', 'info');
    } else {
      swal.fire(
        'Se ha presentado un error al momento de actualizar el usuario!',
        '',
        'warning'
      );
    }
  }

  hasErrors(field: string, typeError: string) {
    return (
      this.userForm.get(field)?.hasError(typeError) &&
      this.userForm.get(field)?.touched
    );
  }
}
