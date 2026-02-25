import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Slider } from "../slider/slider";
import { MasterProducts } from "../master-products/master-products";

@Component({
  selector: 'app-home',
  imports: [Header, Slider, MasterProducts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
