import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-teams-table',
  imports: [NgFor],
  templateUrl: './teams-table.component.html',
  styleUrl: './teams-table.component.css'
})
export class TeamsTableComponent {

teamsTab: any =[


{ id: 1, name:'Team A', owner:'Owner A', foundation: '1899'},
{ id: 2, name:'Team B', owner:'Owner B', foundation: '1900'},
{ id: 3, name:'Team C', owner:'Owner C', foundation: '1895'},
{ id: 4, name:'Team D', owner:'Owner D', foundation: '1890'},
{ id: 5, name:'Team E', owner:'Owner E', foundation: '1877'}

]


}
