import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {

  /**
   * output event
   */
  @Output() objPresentationEvent = new EventEmitter()

  /**
   * customer create form
   */
  objCustomerForm = this.objFormBuilder.group({
    strCustomerName:['',Validators.required],
    strEmail:['',[Validators.email,Validators.required]],
    strRegion:['',Validators.required],
    strCountry:['']
  })

  /**
   * array of countries/region
   */
  arrRegion :any
  /**
   * array of countries
   */
  arrCountries = []
  /**
   * array of filtered countries
   */
  arrFilteredCountries = []

  constructor(
    private objFormBuilder:FormBuilder,
    private fetchDataService:FetchDataService
  ) { }

  ngOnInit(): void {
    this.getCountries()


  }

  /**
   * fetch country
   */
  getCountries(){
    this.fetchDataService.getCountries().subscribe(
      (objData) => {
        this.arrCountries = Object.values(objData.data);
        const uniqueRegions = new Set(this.arrCountries.map(obj => obj['region']));
        this.arrRegion= Array.from(uniqueRegions).map(region => ({ region: region }));
      },
      (error) => {
        console.error('no country', error);
      }
    );
  }

  /**
   * on region select
   */
  onSelectRegion(event:any){
    this.arrFilteredCountries = this.arrCountries.filter(obj=>obj['region'] === event)
    
  }

  /**
   * create customer
   */
  createCustomer(){
    if(this.objCustomerForm.status === "INVALID"){
      return
    }else{
      this.objPresentationEvent.emit({
        strOperation:"SAVE_CUSTOMER",
        objElement:this.objCustomerForm.value
      })
    }
  }
  /**
   * close popup window
   */
  closePopUp(){
    this.objPresentationEvent.emit({
      strOperation:"CLOSE",
      objElement:""
    })
  }
}
