import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  // Global signal
  darkMode = signal(false);

  constructor() {

    // Load saved theme
    const saved = localStorage.getItem('darkMode') === 'true';
    this.darkMode.set(saved);

    // React automatically when value changes
    effect(() => {
      if (this.darkMode()) {
        document.body.classList.add('bg-dark', 'text-light');
      } else {
        document.body.classList.remove('bg-dark', 'text-light');
      }

      localStorage.setItem('darkMode', this.darkMode().toString());
    });
  }

  toggle() {
    this.darkMode.set(!this.darkMode());
  }
}