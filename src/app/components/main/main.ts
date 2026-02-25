import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Slider } from "../slider/slider";
import { MasterProducts } from "../master-products/master-products";
import { Cats } from '../cats/cats';
import { RouterOutlet } from '@angular/router';
import { Home } from '../home/home';

@Component({
  selector: 'app-main',
  imports: [Header, Slider, MasterProducts, Cats, RouterOutlet,Home],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  
}
