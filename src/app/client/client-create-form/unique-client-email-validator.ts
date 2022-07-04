import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ClientServices } from "../client-services";

@Injectable({providedIn: 'root'})
export class UniqueClientEmailValidator implements  AsyncValidator{
    constructor(private clienteServices: ClientServices){  
    }
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.clienteServices.isEmailTaken(control.value).pipe(
            map(isTaken => (isTaken ? {uniqueClientEmailValidator:true} : null)), catchError(()=> of(null)));
    }
}