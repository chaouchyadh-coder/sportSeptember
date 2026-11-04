import { Component } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-matches-table',
  imports: [NgFor, NgStyle],
  templateUrl: './matches-table.component.html',
  styleUrl: './matches-table.component.css'
})
export class MatchesTableComponent {

  matchesTab: any = [

    { id: 1, scoreOne: 1, scoreTwo: 3, teamOne: 'RMD', teamTwo: 'FCB'  },
    { id: 2, scoreOne: 4, scoreTwo: 2, teamOne: 'INTER', teamTwo: 'ROMA'  },
    { id: 3, scoreOne: 0, scoreTwo: 0, teamOne: 'CITY', teamTwo: 'MUN' }

  ];


  scoreColor(a: number, b: number) {

    if (a > b) {

      return 'green';

    } else if (a < b) {
      return 'orange';
    }
    else {
      return 'blue';
    }

  }

  scoreResult(a: number, b: number, teamOne: string) {

    if (a > b) {

      return teamOne + ' is the winner';

    } else if (a < b) {
      return teamOne + ' is the loser';
    }
    else {
      return 'draw';
    }

  
  }











}
