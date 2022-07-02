import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCreateFormComponent } from './book-create-form/book-create-form.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    BookCreateFormComponent
  ],
  exports:[BookCreateFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BookDashboardModule { }
