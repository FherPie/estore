import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { BookServices } from "./book-services";

@Injectable({providedIn: 'root'})
export class UniqueBookValidatorValidator implements  AsyncValidator{
    constructor(private bookServices: BookServices){  
    }
    validate(control: AbstractControl):  Observable<ValidationErrors | null> {
        return this.bookServices.isNameTaken(control.value).pipe(
            map(isTaken => (isTaken ? {uniqueNameBook:true} : null)), catchError(()=> of(null)));
    }
}