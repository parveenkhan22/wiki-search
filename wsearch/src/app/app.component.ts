import { WikipediaService } from './wikipedia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages=[];
  constructor(private wikiservice:WikipediaService){

  }
  onTerm(term:string){
 this
 .wikiservice.search(term).subscribe((response:any)=>{
  this.pages=response.query.search
 }); 
  }
}
