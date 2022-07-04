import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { BookServices } from "./book-services";
import { UniqueBookValidatorValidator } from "./unique-book-validator";

@Directive({
    selector: '[appUniqueNameBook]',
    providers: [
      {
        provide: NG_ASYNC_VALIDATORS,
        useExisting: forwardRef(() => uniqueBookNameValidatorDirective),
        multi: true
      }
    ]
  })
  export class uniqueBookNameValidatorDirective implements AsyncValidator {
    constructor(private validator: UniqueBookValidatorValidator) {}
  
    validate(
      control: AbstractControl
    ): Observable<ValidationErrors | null> {
      console.log("HIHIHI");
      return this.validator.validate(control);
    }
  }


