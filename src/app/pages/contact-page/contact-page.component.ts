import { Component, OnInit  } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, NgClass, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{7,10}')]],
      message: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(500)]]
    })
  }

  ngOnInit(): void {

  }

  hasErrors(field: string, typeError: string) {
    console.log('formulario:: ', this.contactForm.get(field))
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }

}
