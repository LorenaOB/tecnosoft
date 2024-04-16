import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, ValidationErrors} from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CommonModule, NgClass } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass, FormsModule, MatFormFieldModule, 
    MatInputModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  registerForm!: FormGroup;
  hide = true; 

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
    
  }

  ngOnInit(): void {

  }

  hasErrors(field: string, typeError: string) {
    console.log('formulario:: ', this.registerForm.get(field))
    return this.registerForm.get(field)?.hasError(typeError) && this.registerForm.get(field)?.touched;
  }


 
}
