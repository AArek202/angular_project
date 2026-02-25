import { Component } from '@angular/core';
import { ICat } from '../../types/icat';
import { CatData } from '../../services/cat-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-offercat',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './offercat.html',
  styleUrls: ['./offercat.css'],
})
export class Offercat {

  constructor(private catService: CatData) {}

  // Form model
  cat: ICat = {
    catId: 0,
    breedsId: '',
    id: '',
    name: '',
    url: '',
    width: 0,
    height: 0,
    value: 0,
    description: '',
    expanded: false
  };

  submitForm() {
    // Generate new catId
    const cats = this.catService.getAllCats();
    const newId =
      cats.length > 0
        ? Math.max(...cats.map(c => c.catId)) + 1
        : 1;

    this.cat.catId = newId;

    // Add cat to service
    this.catService.postCat({ ...this.cat });

    console.log('Cat offered for adoption:', this.cat);
    alert('Cat successfully offered for adoption!');

    this.resetForm();
  }

  resetForm() {
    this.cat = {
      catId: 0,
      breedsId: '',
      id: '',
      name: '',
      url: '',
      width: 0,
      height: 0,
      value: 0,
      description: '',
      expanded: false
    };
  }
}