import { Component } from '@angular/core';

@Component({
  selector: 'app-totalprice',
  imports: [],
  templateUrl: './totalprice.html',
  styleUrl: './totalprice.css',
})
export class Totalprice {

  totalPrice:number = 0;

  recievedPrice(price:number){
    this.totalPrice = price;
  }

}
