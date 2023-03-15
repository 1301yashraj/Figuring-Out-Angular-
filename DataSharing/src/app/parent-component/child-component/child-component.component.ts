import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @Input() inputFromParent:string;

  //this is the output to be sent as an event out of this component
  @Output() sendOutputToParent = new EventEmitter<string>();
  // now defining when to trigger this output event to occur 
  // let send this output ,basically trigger this on a click
  clickTriggerdMethod(){
    this.sendOutputToParent.emit("Send this to parent");
  }
}
