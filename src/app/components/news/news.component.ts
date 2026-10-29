import { Component } from '@angular/core';
import { InfoComponent } from '../info/info.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-news',
  imports: [InfoComponent, NgFor],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

tab : any= [

{title:"Tiltle 1" ,name :"Name 1", date:"20/09/1995", avatar:"images/person_1.jpg", photo:"images/img_1.jpg" },
{title:"Tiltle 2" ,name :"Name 2", date:"21/09/1995", avatar:"images/person_2.jpg", photo:"images/img_2.jpg" },
{title:"Tiltle 3" ,name :"Name 3", date:"22/09/1995", avatar:"images/person_3.jpg", photo:"images/img_3.jpg" },



]



}
