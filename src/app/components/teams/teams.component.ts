import { Component } from '@angular/core';
import { TeamComponent } from '../team/team.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-teams',
  imports: [TeamComponent, NgFor],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {

teamsTabs : any = [


{ id: 1, name:'Team A', owner:'Owner A', foundation: '2000'},
{ id: 2, name:'Team B', owner:'Owner B', foundation: '1900'},
{ id: 3, name:'Team C', owner:'Owner C', foundation: '1920'},
{ id: 4, name:'Team D', owner:'Owner D', foundation: '1915'},
]

}



