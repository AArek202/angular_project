import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Slider } from "./slider/slider";
import { MasterProducts } from "./master-products/master-products";
import { Cats } from "./cats/cats";
import { Totalprice } from "./totalprice/totalprice";

@Component({
  selector: 'app-root',
  imports: [Header, Slider, MasterProducts, Cats, Totalprice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');
}
