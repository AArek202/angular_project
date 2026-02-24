import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Slider } from "./slider/slider";
import { MasterProducts } from "./master-products/master-products";
import { Cats } from "./cats/cats";

@Component({
  selector: 'app-root',
  imports: [Header, Slider, MasterProducts, Cats],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');
}
