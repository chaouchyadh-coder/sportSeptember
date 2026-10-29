import { Component } from '@angular/core';
import { ResultComponent } from '../result/result.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-matches',
  imports: [ResultComponent, NgFor],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {

matchesData: any =[

{ id: 1, scoreOne:0, scoreTwo:0, teamOne: 'Team A', teamTwo: 'Team B'},
{ id: 2, scoreOne:1, scoreTwo:2, teamOne: 'Team C', teamTwo: 'Team D'},
{ id: 3, scoreOne:3, scoreTwo:1, teamOne: 'Team E', teamTwo: 'Team F'},


]

}
