import { NgStyle, NgClass } from '@angular/common';
import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-result',
  standalone:true,
  imports: [NgStyle, NgClass],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  // obj : paramétre de resultComponet
  @Input() obj:any = {};

  scoreColor(a:number,b:number){
if (a>b) {
  return 'green';

} else if (a<b) {

  return 'orange';
} else{

  return 'blue';
}
  
}

scoreResult(a:number,b:number){

if (a>b) {
  return 'win';

} else if (a<b) {

  return 'loss';
} else{

  return 'draw';
}

}
}
