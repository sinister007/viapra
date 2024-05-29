import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinsAndCustomerComponent } from './presentation/pins-and-customer.component';
import { PinsAndCustomerCComponent } from './container/pins-and-customer-c.component';

const routes: Routes = [
  {path:"",component:PinsAndCustomerCComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinsAndCustomerRoutingModule { }
