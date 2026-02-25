import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-totalprice',
  imports: [],
  templateUrl: './totalprice.html',
  styleUrl: './totalprice.css',
})
export class Totalprice {

   @Input() totalPrice: number = 0;

}
