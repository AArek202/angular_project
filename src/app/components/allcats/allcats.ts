import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { MasterProducts } from '../master-products/master-products';
import { Zoom } from "../../directives/zoom";
import { Shadow } from "../../directives/shadow";
import { WordslicePipe } from "../../pipes/wordslice-pipe";
import { ICat } from '../types/icat';
import { CatData } from '../services/cat-data';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IBreeds } from '../types/ibreeds';
import { BreedData } from '../services/breed-data';


@Component({
  selector: 'app-allcats',
  imports: [Zoom, Shadow, WordslicePipe, RouterLink,FormsModule],
  templateUrl: './allcats.html',
  styleUrl: './allcats.css',
})
export class Allcats implements OnInit{

  breeds: IBreeds[] = [];
  selectedBreedID: string = "";
  filteratedList:ICat[]=[];
  @Input() recievedId = "";
  @Output() fees = new EventEmitter<number>;
  totalPrice = 0;
  showAll = false;
  initialLimit = 4;
  

  constructor(public catlist:CatData ,public breedsList:BreedData){}

  getdata(){
    this.catlist.getAllCats().subscribe(data => {
      this.filteratedList = data;
    });
  }

  ngOnInit(): void {
    this.breeds = this.breedsList.getAllBreeds();
    this.showAllCats();
  }

  ngOnChanges(): void {
    this.showAll = false;
    this.showedCats();
  }

  showAllCats(){
    this.catlist.getAllCats().subscribe(data => {
      this.filteratedList = data;
    });
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

  chargeFees(catt:ICat){
    this.totalPrice += catt.value;
    this.fees.emit(this.totalPrice);
  }

  toggleDescription(cat: ICat) {
    cat.expanded = !cat.expanded;
  }
}
