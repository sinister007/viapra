import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pins-and-customer',
  templateUrl: './pins-and-customer.component.html',
  styleUrls: ['./pins-and-customer.component.scss']
})
export class PinsAndCustomerComponent implements OnInit{

  /**
   * output event to pass data into parent or container
   */
  @Output() objPresentationEvent = new EventEmitter()

  /**
   * array of list of pins
   */
  @Input() arrPins = []
  /**
   * array of columns
   */
  arrColumns = [
    {strHeader:"Title",strKey:"strTitle"},
    {strHeader:"Images",strKey:"strImages"},
    {strHeader:"Collaborators",strKey:"strCollaborators"},
    {strHeader:"Privary",strKey:"strPrivacy"},

  ]


  constructor() { }

  ngOnInit(): void {
  }

 


  /**
   * add customer function
   */
  addCustomer(){
    this.objPresentationEvent.emit({
      strOperation:"CREATE_CUSTOMER"
    })

  }

  /**
   * add pin
   */
  addPin(){
    this.objPresentationEvent.emit({
      strOperation:"CREATE_PIN"
    })
  }

}
