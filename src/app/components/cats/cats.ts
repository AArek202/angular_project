import { Component, EventEmitter, Input, Output} from '@angular/core';
import { MasterProducts } from '../master-products/master-products';
import { Zoom } from "../../directives/zoom";
import { Shadow } from "../../directives/shadow";
import { WordslicePipe } from "../../pipes/wordslice-pipe";
import { ICat } from '../types/icat';
import { CatData } from '../services/cat-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cats',
  imports: [Zoom, Shadow, WordslicePipe, RouterLink],
  templateUrl: './cats.html',
  styleUrl: './cats.css',
})

export class Cats {

  filteratedList:ICat[]=[];
  @Input() recievedId = "";
  @Output() fees = new EventEmitter<number>;
  totalPrice = 0;
  showAll = false;
  initialLimit = 4;

  constructor(public catlist:CatData){}

  getdata(){
    this.filteratedList = this.catlist.getAllCats();
  }

  ngOnInit(): void {
    this.showedCats()
  }

  ngOnChanges(): void {
    this.showAll = false;
    this.showedCats();
  }

  toggleShow() {
    this.showAll = !this.showAll;
    this.showedCats();
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  }

  showedCats() {

    const allCats = this.catlist.getAllCats();

    if (!this.recievedId || this.recievedId === 'all') {

      if (this.showAll) {
        this.filteratedList = [...allCats];
      } else {
        this.filteratedList = allCats.slice(0, this.initialLimit);
      }

    } else {
      this.filteratedList = allCats.filter(
        el => el.breedsId === this.recievedId
      );
    }

  }

  totalCatsCount(): number {
    return this.catlist.getAllCats().length;
  }

  adobtMe(){
    alert("You Have Adobted Me!!" + this.totalPrice);
  }

  chargeFees(catt:ICat){
    this.totalPrice += catt.value;
    this.fees.emit(this.totalPrice);
    this.adobtMe();
  }

  toggleDescription(cat: ICat) {
    cat.expanded = !cat.expanded;
  }

}
