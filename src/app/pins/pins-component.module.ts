import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinsComponentComponent } from './pins-component.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';
import { NgxSelectModule } from 'ngx-select-ex';
import { MatRadioModule } from '@angular/material/radio';





@NgModule({
  declarations: [
    PinsComponentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    FileUploadModule,
    NgxSelectModule,
    MatRadioModule
  ]
})
export class PinsComponentModule { }
