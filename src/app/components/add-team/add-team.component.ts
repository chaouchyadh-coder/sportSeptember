import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  imports: [FormsModule],
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.css'
})
export class AddTeamComponent {

team:any={}

addTeam(){

console.log("her is team object",this.team);


}


}
