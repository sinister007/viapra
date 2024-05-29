import {
  Component,
  OnInit
} from '@angular/core';
import {
  MatDialog
} from '@angular/material/dialog';
import {
  CustomerComponent
} from 'src/app/customer/customer.component';
import {
  PinsComponentComponent
} from 'src/app/pins/pins-component.component';

@Component({
  selector: 'app-pins-and-customer-c',
  templateUrl: './pins-and-customer-c.component.html',
  styleUrls: ['./pins-and-customer-c.component.scss'],
  // providers['']
})
export class PinsAndCustomerCComponent implements OnInit {

  /**
   * array of pins
   */
  arrPins = []

  constructor(
    public objDialog: MatDialog
  ) {}

  ngOnInit(): void {
    const storedPin = localStorage.getItem("arrPin");
    this.arrPins = storedPin ? JSON.parse(storedPin) : [];
  }

  /**
   * event from pins and customer list
   */
  eventFromPinsAndCustomerList(objEvent: any) {
    switch (objEvent.strOperation) {
      case "CREATE_CUSTOMER":
        this.openCreateCustomerPopup()
        break;
      case "CREATE_PIN":
        this.openCreatePinPopup()
        break;

      default:
        break;
    }
  }

  /**
   * open create customer popup window
   */
  openCreateCustomerPopup() {

    const dialogRef = this.objDialog.open(CustomerComponent, {
      disableClose: true,
      width: '400px',
      data: {}
    })
    dialogRef.componentInstance.objPresentationEvent.subscribe(objEvent => {
      switch (objEvent.strOperation) {
        /**
         * save customer from popup
         */
        case "SAVE_CUSTOMER":
          if (localStorage.getItem("arrCustomer")) {
            const storedCustomers = localStorage.getItem("arrCustomer");
            const arrCustomers = storedCustomers ? JSON.parse(storedCustomers) : [];
            arrCustomers.push(objEvent.objElement)
            localStorage.setItem("arrCustomer", JSON.stringify(arrCustomers))

          } else {
            localStorage.setItem("arrCustomer", JSON.stringify([objEvent.objElement]))
          }
          this.objDialog.closeAll()
          break;
        case "CLOSE":
          this.objDialog.closeAll()
          break;
        default:
          break;
      }
    })

  }

  /**
   * open create customer popup window
   */
  openCreatePinPopup() {

    const dialogRef = this.objDialog.open(PinsComponentComponent, {
      disableClose: true,
      width: '400px',
      data: {}
    })
    dialogRef.componentInstance.objPresentationEvent.subscribe(objEvent => {
      switch (objEvent.strOperation) {
        /**
         * save customer from popup
         */
        case "SAVE_PIN":
          if (localStorage.getItem("arrPin")) {
            const storedPin = localStorage.getItem("arrPin");
            const arrPins = storedPin ? JSON.parse(storedPin) : [];
            arrPins.push(objEvent.objElement)
            localStorage.setItem("arrPin", JSON.stringify(arrPins))

          } else {
            localStorage.setItem("arrPin", JSON.stringify([objEvent.objElement]))
          }
          const storedPin = localStorage.getItem("arrPin");
          this.arrPins = storedPin ? JSON.parse(storedPin) : [];
          this.objDialog.closeAll()
          break;
        case "CLOSE":
          this.objDialog.closeAll()
          break;
        default:
          break;
      }
    })
  }

}
