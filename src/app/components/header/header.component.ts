import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
// proprietes
title :string = "Home";
cssClass: string = "dropdown";

// methodes
calcul(a:number,b:number){

return a + b;

}
}