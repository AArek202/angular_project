import { Component, effect, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ThemeService } from '../../components/services/theme';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(public theme: ThemeService) {}
}
