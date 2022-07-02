import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCreateFormComponent } from './book-create-form/book-create-form.component';
import {FormsModule} from '@angular/forms';
import { ForbiddenValidatorDirective } from './book-create-form/forbidden-name.directive';


@NgModule({
  declarations: [
    BookCreateFormComponent,
    ForbiddenValidatorDirective
  ],
  exports:[BookCreateFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BookDashboardModule { }
