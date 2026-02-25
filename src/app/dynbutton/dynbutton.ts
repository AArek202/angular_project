import { Component } from '@angular/core';

type Button = {
  id:string
  name:string
}

@Component({
  selector: 'app-dynbutton',
  imports: [],
  templateUrl: './dynbutton.html',
  styleUrl: './dynbutton.css',
})

export class Dynbutton {

  buttons:Button[] = [
    {
      "id":"adobtcat",
      "name":"Adobt Me"
    }
  ]

}
