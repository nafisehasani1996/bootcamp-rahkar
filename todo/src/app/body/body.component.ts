import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  color:string=""
  name:string=""
  selectedid:number=100
  bodyli:string[]=[]
   getname(event:any){
    this.name=event.target.value
  }
  onhanking(){
   this.bodyli.push(this.name)
  }
  ondone(even:number){
    this.selectedid=even
  }
  onpak(even:any){
    this.bodyli.splice (even,1)
  }
}
 

