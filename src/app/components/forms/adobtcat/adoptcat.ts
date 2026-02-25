import { Component } from '@angular/core';
import { IAdopter } from '../../types/iadopter';
import { AdopterData } from '../../services/adopter-data';

@Component({
  selector: 'app-adoptcat',
  templateUrl: './adoptcat.html',
  styleUrls: ['./adoptcat.css'],
})
export class Adoptcat {

  constructor(private adopterService: AdopterData) {}

  // Form model based on IAdopter
  adopter: IAdopter = {
    id: 0,
    fullName: '',
    email: '',
    phone: '',
    address: '',
    housingType: '',
    otherPets: '',
    experience: '',
    reason: '',
    agreeTerms: false
  };

  submitForm() {

    if (!this.adopter.agreeTerms) {
      alert("You must agree to provide proper care.");
      return;
    }

    // Generate new ID
    const allAdopters = this.adopterService.getAllAopters();
    const newId = allAdopters.length > 0
      ? Math.max(...allAdopters.map(a => a.id)) + 1
      : 1;

    this.adopter.id = newId;

    // Add to service
    this.adopterService.addAdopter({ ...this.adopter });

    console.log("Adopter Added:", this.adopter);
    alert("Application submitted successfully!");

    // Reset form
    this.resetForm();
  }

  resetForm() {
    this.adopter = {
      id: 0,
      fullName: '',
      email: '',
      phone: '',
      address: '',
      housingType: '',
      otherPets: '',
      experience: '',
      reason: '',
      agreeTerms: false
    };
  }
}