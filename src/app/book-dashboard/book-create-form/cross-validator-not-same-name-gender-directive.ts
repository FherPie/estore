import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

@Directive({
    selector: '[notSameNameThatGender]',
    providers: [{ provide: NG_VALIDATORS, useExisting: notSameNameThatGenderDirective, multi: true }]
  })
  export class notSameNameThatGenderDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
      return notSameNameThatGender(control);
    }
  }

export const  notSameNameThatGender: ValidatorFn = (control: AbstractControl)
  : ValidationErrors | null => {
  const name = control.get('name');
  const gender = control.get('gender');
  console.log("VALIDATORRR"+name?.value+gender?.value);
  return name && gender && name.value === gender.value ? { notSameNameThatGender: true } : null;
};
