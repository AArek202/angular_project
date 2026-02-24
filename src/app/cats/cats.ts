import { Component, EventEmitter, Input, Output} from '@angular/core';
import { MasterProducts } from '../master-products/master-products';
import { Zoom } from "../directives/zoom";
import { Shadow } from "../directives/shadow";
import { Dynbutton } from '../dynbutton/dynbutton';

type CatList = {
    breedsId:string,
    id: string,
    name:string,
    url: string,
    width: number,
    height: number,
    value:number,
    description:string
}

@Component({
  selector: 'app-cats',
  imports: [Zoom, Shadow,Dynbutton],
  templateUrl: './cats.html',
  styleUrl: './cats.css',
})

export class Cats {

  filteratedList:CatList[]=[];
  @Input() recievedId = "";
  @Output() fess = new EventEmitter<number>;
  totalPrice = 0;

  catlist:CatList[] = [
  {
    "breedsId":"abys",
    "id": "EHG3sOpAM",
    "name":"Luna",
    "url": "https://cdn2.thecatapi.com/images/EHG3sOpAM.jpg",
    "width": 1600,
    "height": 1067,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId":"abys",
    "id": "unPP08xOZ",
    "name":"Milo",
    "url": "https://cdn2.thecatapi.com/images/unPP08xOZ.jpg",
    "width": 2136,
    "height": 2848,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId":"abys",
    "id": "itfFA4NWS",
    "name":"Luna",
    "url": "https://cdn2.thecatapi.com/images/itfFA4NWS.jpg",
    "width": 1280,
    "height": 914,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId":"abys",
    "id": "gCEFbK7in",
    "name":"Nala",
    "url": "https://cdn2.thecatapi.com/images/gCEFbK7in.jpg",
    "width": 1424,
    "height": 987,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId":"abys",
    "id": "p6x60nX6U",
    "name":"Simba",
    "url": "https://cdn2.thecatapi.com/images/p6x60nX6U.jpg",
    "width": 1032,
    "height": 774,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId":"abys",
    "id": "tv8tNeYaU",
    "name":"Coco",
    "url": "https://cdn2.thecatapi.com/images/tv8tNeYaU.jpg",
    "width": 1600,
    "height": 1200,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId": "beng",
    "id": "J2PmlIizw",
    "name":"Leo",
    "url": "https://cdn2.thecatapi.com/images/J2PmlIizw.jpg",
    "width": 1080,
    "height": 1350,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId": "beng",
      "id": "LSaDk6OjY",
      "name":"Oliver",
    "url": "https://cdn2.thecatapi.com/images/LSaDk6OjY.jpg",
    "width": 1080,
    "height": 1080,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId": "beng",
    "id": "IFXsxmXLm",
    "name":"Sumo",
    "url": "https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg",
    "width": 973,
    "height": 973,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId": "beng",
    "id": "8ciqdpaO5",
    "name":"Zylaan",
    "url": "https://cdn2.thecatapi.com/images/8ciqdpaO5.jpg",
    "width": 1080,
    "height": 809,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId": "beng",
    "id": "VZ3qFLIe3",
    "name":"Abaass",
    "url": "https://cdn2.thecatapi.com/images/VZ3qFLIe3.jpg",
    "width": 750,
    "height": 937,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId": "beng",
    "id": "byQhFO7iV",
    "name":"Oreo",
    "url": "https://cdn2.thecatapi.com/images/byQhFO7iV.jpg",
    "width": 1795,
    "height": 2397,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId": "beng",
    "id": "UhqCZ7tC4",
    "name":"Claw",
    "url": "https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg",
    "width": 1600,
    "height": 1200,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId": "beng",
    "id": "O3btzLlsO",
    "name":"Senister",
    "url": "https://cdn2.thecatapi.com/images/O3btzLlsO.png",
    "width": 1100,
    "height": 739,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId": "beng",
    "id": "dN6eoeLjY",
    "name":"Newton",
    "url": "https://cdn2.thecatapi.com/images/dN6eoeLjY.jpg",
    "width": 3648,
    "height": 2736,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId": "beng",
    "id": "NwMUoJYmT",
    "name":"Willow",
    "url": "https://cdn2.thecatapi.com/images/NwMUoJYmT.jpg",
    "width": 2160,
    "height": 1440,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId": "beng",
    "id": "sPMOo3Jn2",
    "name":"William the 3rd",
    "url": "https://cdn2.thecatapi.com/images/sPMOo3Jn2.jpg",
    "width": 880,
    "height": 1100,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId": "beng",
    "id": "ZocD-pQxd",
    "name":"Daisy",
    "url": "https://cdn2.thecatapi.com/images/ZocD-pQxd.jpg",
    "width": 880,
    "height": 1100,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId": "beng",
    "id": "4-5SzDNIL",
    "name":"Felix",
    "url": "https://cdn2.thecatapi.com/images/4-5SzDNIL.jpg",
    "width": 880,
    "height": 1100,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  },
  {
    "breedsId": "beng",
    "id": "g1j3wRjgx",
    "name":"Ash",
    "url": "https://cdn2.thecatapi.com/images/g1j3wRjgx.jpg",
    "width": 1024,
    "height": 1024,
    "value":500,
    "description":"Some quick example text to build on the card title and make up the bulk of the card’s content."
  }
]

  ngOnInit(): void {
    if(this.recievedId === ""){
      this.filteratedList = this.catlist.splice(0,4);
    }
  }

  ngOnChanges(): void {
   this.showedCats()
  }

  showedCats(){
    this.filteratedList = this.catlist.filter((el)=>el.breedsId === this.recievedId)
  }

  chargeFees(catt:CatList){
    this.totalPrice += catt.value;
    this.fess.emit(this.totalPrice);
  }

}
