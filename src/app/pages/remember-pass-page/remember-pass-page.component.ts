import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CommonModule, NgClass } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import swal from 'sweetalert2';

@Component({
  selector: 'app-remember-pass-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './remember-pass-page.component.html',
  styleUrl: './remember-pass-page.component.css'
})
export class RememberPassPageComponent {
 
  rememberPassForm!: FormGroup;
  hide = true; 

  constructor(private formBuilder: FormBuilder) {
    this.rememberPassForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {

  }

  hasErrors(field: string, typeError: string) {
    return this.rememberPassForm.get(field)?.hasError(typeError) && this.rememberPassForm.get(field)?.touched;
  }

  rememberEvent() {
    
    swal.fire(
      'Te hemos enviado un recordatorio de contraseña',
      'Revisa tu correo electrónico',
      'success'
    );
  }
  
}
