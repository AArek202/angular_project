import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cats } from '../cats/cats';
import { Totalprice } from "../totalprice/totalprice";

type Breeds = {
  id: string,
  name: string
}

@Component({
  selector: 'app-master-products',
  imports: [FormsModule, Cats, Totalprice],
  templateUrl: './master-products.html',
  styleUrl: './master-products.css',
})
export class MasterProducts {

  selectedBreedID:string ="";
  totalPrice = 0;

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

    recievedPrice(price:number){
    this.totalPrice = price;
  }
}
