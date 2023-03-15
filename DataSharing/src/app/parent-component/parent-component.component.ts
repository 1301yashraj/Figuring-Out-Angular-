import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
     
  sendThisTochild:string;
  thisIsParentDataHolder :string;
  sendingdataTochild(){
    this.sendThisTochild ="Sent from parent";
  }
  callthismethodOfParentOnChildTrigger(eventdata :string){
    this.thisIsParentDataHolder = eventdata;
  }
}
