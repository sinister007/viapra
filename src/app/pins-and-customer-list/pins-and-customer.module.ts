import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinsAndCustomerRoutingModule } from './pins-and-customer-routing.module';
import { PinsAndCustomerComponent } from './presentation/pins-and-customer.component';
import {TableModule} from 'primeng/table';
import { PinsAndCustomerCComponent } from './container/pins-and-customer-c.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerModule } from '../customer/customer.module';
import { PinsComponentModule } from '../pins/pins-component.module';

@NgModule({
  declarations: [
    PinsAndCustomerComponent,
    PinsAndCustomerCComponent
  ],
  imports: [
    CommonModule,
    PinsAndCustomerRoutingModule,
    TableModule,
    MatDialogModule,
    CustomerModule,
    PinsComponentModule
    
  ]
})
export class PinsAndCustomerModule { }
