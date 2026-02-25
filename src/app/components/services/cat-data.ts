import { Injectable } from '@angular/core';
import { ICat } from '../types/icat';

@Injectable({
  providedIn: 'root',
})
export class CatData {
  slice(arg0: number, initialLimit: number): ICat[] {
    throw new Error('Method not implemented.');
  }
  filter(arg0: (el: any) => boolean): ICat[] {
    throw new Error('Method not implemented.');
  }
  id:number = 0;
  catlist: ICat[] = [];

  constructor(){
    this.catlist = [
      {
        catId: 1,
        breedsId:"abys",
        id: "EHG3sOpAM",
        name:"Luna",
        url: "https://cdn2.thecatapi.com/images/EHG3sOpAM.jpg",
        width: 1600,
        height: 1067,
        value:500,
        description:"Hi, I’m Luna! I’m a gentle little queen who loves warm naps and soft cuddles. I promise to fill your home with purrs and happiness. Adopt me and I’ll be your forever best friend!"
      },
      {
        catId: 2,
        breedsId:"abys",
        id: "unPP08xOZ",
        name:"Milo",
        url: "https://cdn2.thecatapi.com/images/unPP08xOZ.jpg",
        width: 2136,
        height: 2848,
        value:500,
        description:"Hey there! I’m Milo, your future playful buddy. I love chasing toys and giving head bumps. I’m a very good boy and I’m ready to bring joy into your life!"
      },
      {
        catId: 3,
        breedsId:"abys",
        id: "itfFA4NWS",
        name:"Luna",
        url: "https://cdn2.thecatapi.com/images/itfFA4NWS.jpg",
        width: 1280,
        height: 914,
        value:500,
        description:"Hello human! I’m Luna, sweet and calm. I adore cozy evenings and gentle pets. I’ll stay by your side and make every day brighter. Can I come home with you?"
      },
      {
        catId: 4,
        breedsId:"abys",
        id: "gCEFbK7in",
        name:"Nala",
        url: "https://cdn2.thecatapi.com/images/gCEFbK7in.jpg",
        width: 1424,
        height: 987,
        value:500,
        description:"I’m Nala! I’m brave, loving, and full of charm. I’ll guard your couch and your heart. I’m ready to be adopted and shower you with love!"
      },
      {
        catId: 5,
        breedsId:"abys",
        id: "p6x60nX6U",
        name:"Simba",
        url: "https://cdn2.thecatapi.com/images/p6x60nX6U.jpg",
        width: 1032,
        height: 774,
        value:500,
        description:"Roar! I’m Simba, king of cuddles. I’m playful but super loyal. I’ll rule your home with kindness and fluffy hugs!"
      },
      {
        catId: 6,
        breedsId:"abys",
        id: "tv8tNeYaU",
        name:"Coco",
        url: "https://cdn2.thecatapi.com/images/tv8tNeYaU.jpg",
        width: 1600,
        height: 1200,
        value:500,
        description:"Hi! I’m Coco, sweet as chocolate. I love attention and I’ll happily curl up next to you. I’m the perfect little companion waiting for adoption!"
      },
      {
        catId: 7,
        breedsId: "beng",
        id: "J2PmlIizw",
        name:"Leo",
        url: "https://cdn2.thecatapi.com/images/J2PmlIizw.jpg",
        width: 1080,
        height: 1350,
        value:500,
        description:"I’m Leo, strong and handsome! I love exploring and then relaxing beside my human. Adopt me and I’ll protect your snacks and your heart."
      },
      {
        catId: 8,
        breedsId: "beng",
        id: "LSaDk6OjY",
        name:"Oliver",
        url: "https://cdn2.thecatapi.com/images/LSaDk6OjY.jpg",
        width: 1080,
        height: 1080,
        value:500,
        description:"Hello! I’m Oliver, polite and charming. I have the softest purr and the biggest heart. I’m ready to be your loyal companion."
      },
      {
        catId: 9,
        breedsId: "beng",
        id: "IFXsxmXLm",
        name:"Sumo",
        url: "https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg",
        width: 973,
        height: 973,
        value:500,
        description:"Hey! I’m Sumo. I may look strong, but I’m a total sweetheart. I’ll give you endless cuddles and lots of silly moments!"
      },
      {
        catId: 10,
        breedsId: "beng",
        id: "8ciqdpaO5",
        name:"Zylaan",
        url: "https://cdn2.thecatapi.com/images/8ciqdpaO5.jpg",
        width: 1080,
        height: 809,
        value:500,
        description:"I’m Zylaan! Energetic, fun, and super loving. I’ll turn your house into a happy playground full of purrs."
      },
      {
        catId: 11,
        breedsId: "beng",
        id: "VZ3qFLIe3",
        name:"Abaass",
        url: "https://cdn2.thecatapi.com/images/VZ3qFLIe3.jpg",
        width: 750,
        height: 937,
        value:500,
        description:"Hi! I’m Abaass. I’m calm, wise, and very affectionate. I’ll sit next to you and listen to all your stories."
      },
      {
        catId: 12,
        breedsId: "beng",
        id: "byQhFO7iV",
        name:"Oreo",
        url: "https://cdn2.thecatapi.com/images/byQhFO7iV.jpg",
        width: 1795,
        height: 2397,
        value:500,
        description:"I’m Oreo! Sweet, playful, and impossible to resist. I’ll brighten your days with my adorable face and loving heart."
      },
      {
        catId: 13,
        breedsId: "beng",
        id: "UhqCZ7tC4",
        name:"Claw",
        url: "https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg",
        width: 1600,
        height: 1200,
        value:500,
        description:"They call me Claw, but I’m actually super gentle! I’m a loyal good boy ready to protect and love my forever family."
      },
      {
        catId: 14,
        breedsId: "beng",
        id: "O3btzLlsO",
        name:"Senister",
        url: "https://cdn2.thecatapi.com/images/O3btzLlsO.png",
        width: 1100,
        height: 739,
        value:500,
        description:"I may look mysterious, but I’m full of love! I’ll quietly sit by your side and make you feel safe and happy."
      },
      {
        catId: 15,
        breedsId: "beng",
        id: "dN6eoeLjY",
        name:"Newton",
        url: "https://cdn2.thecatapi.com/images/dN6eoeLjY.jpg",
        width: 3648,
        height: 2736,
        value:500,
        description:"I’m Newton! Smart, curious, and full of love. I’ll explore your home and then cuddle up after my adventures."
      },
      {
        catId: 16,
        breedsId: "beng",
        id: "NwMUoJYmT",
        name:"Willow",
        url: "https://cdn2.thecatapi.com/images/NwMUoJYmT.jpg",
        width: 2160,
        height: 1440,
        value:500,
        description:"Hi, I’m Willow! Graceful and gentle. I’ll softly purr beside you and make your home peaceful and warm."
      },
      {
        catId: 17,
        breedsId: "beng",
        id: "sPMOo3Jn2",
        name:" Sir William III",
        url: "https://cdn2.thecatapi.com/images/sPMOo3Jn2.jpg",
        width: 880,
        height: 1100,
        value:500,
        description:"Greetings! I am William the 3rd. Royal, fluffy, and very affectionate. I shall honor you with my presence and endless cuddles."
      },
      {
        catId: 18,
        breedsId: "beng",
        id: "ZocD-pQxd",
        name:"Daisy",
        url: "https://cdn2.thecatapi.com/images/ZocD-pQxd.jpg",
        width: 880,
        height: 1100,
        value:500,
        description:"I’m Daisy! Sweet, loving, and playful. I’ll bloom beautifully in your home and bring you happiness every day."
      },
      {
        catId: 19,
        breedsId: "beng",
        id: "4-5SzDNIL",
        name:"Felix",
        url: "https://cdn2.thecatapi.com/images/4-5SzDNIL.jpg",
        width: 880,
        height: 1100,
        value:500,
        description:"Hey! I’m Felix. Funny, friendly, and super cuddly. I promise to always be a good boy and your loyal companion."
      },
      {
        catId: 20,
        breedsId: "beng",
        id: "g1j3wRjgx",
        name:"Ash",
        url: "https://cdn2.thecatapi.com/images/g1j3wRjgx.jpg",
        width: 1024,
        height: 1024,
        value:500,
        description:"Hi, I’m Ash! Calm, cool, and very loving. I’m ready to be adopted and make your life full of warmth and purrs."
      }
    ];
  }
  
  getAllCats():ICat[]{
    return this.catlist
  }

  getCatById(CID:number):ICat[]{
    if(CID===0){
      return this.catlist;
    } else {
    return this.catlist.filter((c)=> c.catId === CID)
    }
  }

  postCat(cat:ICat){
    this.catlist.push(cat);
  }

  updateCat(CID: number,
      property: Exclude<keyof ICat, "catId">,
      newValue: ICat[Exclude<keyof ICat, "catId">]){
    if(!this.catlist.some(c => c.catId === CID)){
      throw new Error ("We don't have that Cat")
    } else {
      let requiredCat = this.catlist.find((c)=> c.catId === CID)
      if(!requiredCat){
        throw new Error ("We don't have that Cat")
      } else {
        (requiredCat as any)[property] = newValue;
      }
    }
  }

  dropCat(CID: number) {
    if (!this.catlist.some(c => c.catId === CID)) {
      throw new Error("We don't have that cat");
    }
    this.catlist = this.catlist.filter(c => c.catId !== CID);
  }
}
