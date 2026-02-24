import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cats } from '../cats/cats';

type Breeds = {
  id: string,
  name: string
}

@Component({
  selector: 'app-master-products',
  imports: [FormsModule,Cats],
  templateUrl: './master-products.html',
  styleUrl: './master-products.css',
})
export class MasterProducts {

  selectedBreedID:string ="";

  breeds:Breeds []=[ 
    {
    "id":"abys",
    "name":"Abyssinian"
    },
    {
    "id":"beng",
    "name":"Bengal"
    },
  ]
}
