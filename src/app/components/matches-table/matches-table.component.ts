import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-matches-table',
  imports: [NgFor],
  templateUrl: './matches-table.component.html',
  styleUrl: './matches-table.component.css'
})
export class MatchesTableComponent {

matchesTab:any=[

{ id: 1, scoreOne:0, scoreTwo:2, teamOne: 'Team A', teamTwo: 'Team B'},
{ id: 2, scoreOne:1, scoreTwo:3, teamOne: 'Team C', teamTwo: 'Team D'},
{ id: 3, scoreOne:2, scoreTwo:2, teamOne: 'Team E', teamTwo: 'Team F'}

];

}
