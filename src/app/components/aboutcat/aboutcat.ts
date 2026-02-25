import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ICat } from '../types/icat';
import { CatData } from '../services/cat-data';

@Component({
  selector: 'app-aboutcat',
  templateUrl: './aboutcat.html',
  styleUrls: ['./aboutcat.css'],
  imports: [RouterLink]
})
export class Aboutcat implements OnInit {
  id: number | null = null;
  selectedCat: ICat | null = null;

  constructor(private active: ActivatedRoute, private catslist: CatData) {}

  ngOnInit(): void {
    this.id = Number(this.active.snapshot.paramMap.get('ID'));
    if (!isNaN(this.id)) {
      this.selectedCat = this.catslist.getCatById(this.id)[0] || null;
    }
  }
}