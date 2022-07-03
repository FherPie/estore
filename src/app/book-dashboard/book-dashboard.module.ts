import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCreateFormComponent } from './book-create-form/book-create-form.component';
import {FormsModule} from '@angular/forms';
import { ForbiddenValidatorDirective } from './book-create-form/forbidden-name.directive';
import { notSameNameThatGenderDirective } from './book-create-form/cross-validator-not-same-name-gender-directive';

@NgModule({
  declarations: [
    BookCreateFormComponent,
    ForbiddenValidatorDirective,
    notSameNameThatGenderDirective
  ],
  exports:[BookCreateFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BookDashboardModule { }
