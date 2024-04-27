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
import { UtilitiesService } from '../../services/utilities/utilities.service';

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
    private utilitiesService: UtilitiesService
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

  ngOnInit(): void {
    // this.utilitiesService.getJsonData().subscribe(
    //   (response) => {
    //     let datos = response;
    //     console.log('Datos cargados:', datos);
    //   },
    //   (error) => {
    //     console.error('Error al cargar los datos:', error);
    //   }
    // );
  }

  hasErrors(field: string, typeError: string) {
    return this.utilities.hasErrors(field, typeError, this.registerForm);
    // console.log('formulario:: ', this.registerForm.get(field));
    /*return (
      this.registerForm.get(field)?.hasError(typeError) &&
      this.registerForm.get(field)?.touched
    );*/
  }
}
