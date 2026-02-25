import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-errorpage',
  imports: [],
  templateUrl: './errorpage.html',
  styleUrl: './errorpage.css',
})
export class Errorpage {
  constructor(private location:Location , private router:Router){}
   Back(){
    this.location.back()
   }

   BackToHome(){
    this.router.navigateByUrl('/')
   }
}
