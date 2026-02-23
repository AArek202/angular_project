import { Component } from '@angular/core';

type Images = {
  id:string,
  url:string,
  width:number,
  height:number
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

  images: Images[] = [
  {
    "id": "7sa",
    "url": "https://cdn2.thecatapi.com/images/7sa.gif",
    "width": 480,
    "height": 272
  },
  {
    "id": "94h",
    "url": "https://cdn2.thecatapi.com/images/94h.png",
    "width": 500,
    "height": 334
  },
  {
    "id": "ae7",
    "url": "https://cdn2.thecatapi.com/images/ae7.jpg",
    "width": 780,
    "height": 520
  },
  {
    "id": "beh",
    "url": "https://cdn2.thecatapi.com/images/beh.jpg",
    "width": 500,
    "height": 375
  },
  {
    "id": "c9e",
    "url": "https://cdn2.thecatapi.com/images/c9e.jpg",
    "width": 564,
    "height": 680
  },
  {
    "id": "d2o",
    "url": "https://cdn2.thecatapi.com/images/d2o.jpg",
    "width": 500,
    "height": 410
  },
  {
    "id": "db6",
    "url": "https://cdn2.thecatapi.com/images/db6.jpg",
    "width": 500,
    "height": 333
  },
  {
    "id": "egg",
    "url": "https://cdn2.thecatapi.com/images/egg.jpg",
    "width": 1280,
    "height": 1143
  },
  {
    "id": "MTY2OTA1Ng",
    "url": "https://cdn2.thecatapi.com/images/MTY2OTA1Ng.jpg",
    "width": 500,
    "height": 331
  },
  {
    "id": "MjA1MDEyMQ",
    "url": "https://cdn2.thecatapi.com/images/MjA1MDEyMQ.jpg",
    "width": 1936,
    "height": 2592
  }
];

  currentIndex = 0;

  prev() {
    if(this.currentIndex > 0){
      this.currentIndex--;
    }
    else{
      this.currentIndex = this.images.length - 1;
    }
    console.log("prev")
  }

  next() {
    console.log("next")
    if(this.currentIndex < this.images.length - 1){
      this.currentIndex++;
    }
    else{
      this.currentIndex = 0;
    }
  }
}
