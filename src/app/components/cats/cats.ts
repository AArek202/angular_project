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
  standalone: true,
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
    this.catlist.getAllCats().subscribe(data => {
      this.filteratedList = data;
    });
    console.log(this.catlist.getAllCats().subscribe(data => {
      this.filteratedList = data;
    }))
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

    this.catlist.getAllCats().subscribe((allCats: ICat[]) => {

      if (!this.recievedId || this.recievedId === 'all') {

        this.filteratedList = this.showAll
          ? [...allCats]
          : allCats.slice(0, this.initialLimit);

      } else {

        this.filteratedList = allCats.filter(
          el => el.breedsId === this.recievedId
        );

      }

    });

  }

  totalCatsCount(): number {
    return this.filteratedList.length;
  }


  chargeFees(catt:ICat){
    this.totalPrice += catt.value;
    this.fees.emit(this.totalPrice);
  }

  toggleDescription(cat: ICat) {
    cat.expanded = !cat.expanded;
  }

}
