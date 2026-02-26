import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adoptcat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adoptcat.html',
  styleUrl: './adoptcat.css'
})
export class Adoptcat implements OnInit {

  adoptForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.adoptForm = this.fb.group({
      fullName: ['', [
        Validators.required,
        this.fullNameValidator
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phone: ['', [
        Validators.required,
        this.phoneValidator
      ]],
      address: ['', Validators.required],
      housingType: ['', Validators.required],
      otherPets: ['', Validators.required],
      experience: ['', Validators.required],
      reason: ['', [
        Validators.required,
        this.minWordsValidator(5)
      ]],
      agreeTerms: [false, this.mustBeTrueValidator]
    });
  }


  fullNameValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value?.trim();
    if (!value) return null;

    const nameParts = value.split(' ');
    if (nameParts.length < 2) {
      return { fullNameInvalid: true };
    }

    return null;
  }

  phoneValidator(control: AbstractControl): ValidationErrors | null {
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(control.value)) {
      return { invalidPhone: true };
    }
    return null;
  }

  minWordsValidator(minWords: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const words = control.value.trim().split(' ');
      if (words.length < minWords) {
        return { minWords: true };
      }
      return null;
    };
  }

  mustBeTrueValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value !== true) {
      return { mustAgree: true };
    }
    return null;
  }

  submitForm() {
    if (this.adoptForm.valid) {
      console.log(this.adoptForm.value);
      alert("Application Submitted Successfully");
      this.adoptForm.reset();
    } else {
      this.adoptForm.markAllAsTouched();
    }
  }

  get f() {
    return this.adoptForm.controls;
  }
}