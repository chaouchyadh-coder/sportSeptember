import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  imports: [FormsModule],
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.css'
})
export class AddPlayerComponent {

  player:any={}

  addPlayer(){

    console.log("her is player object", this.player);
    

  }

}
