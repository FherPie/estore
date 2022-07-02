import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCreateFormComponent } from './client-create-form/client-create-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientCreateFormComponent
  ],
  exports: [
    ClientCreateFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
