import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms'
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
//import { forbiddenNameValidator } from './forbidden-name.directive';

@Component({
  selector: 'app-client-create-form',
  templateUrl: './client-create-form.component.html',
  styleUrls: ['./client-create-form.component.css']
})
export class ClientCreateFormComponent implements OnInit {

  // name= new FormControl(121);

  // clientForm= new FormGroup({
  //   firstName: new FormControl('',[Validators.required]),
  //   lastName: new FormControl('',[Validators.required]),
  // });

  // clientForm= new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')  
  //   })
  // });


  // clientForm= this.fb.group({
  //   firstName: ['4', Validators.required],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: [''] 
  //   }),
  // });


  // clientForm= this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: [''] 
  //   }),
  //   phones: this.fb.array([
  //     this.fb.control('')
  //   ])
  // });


  get phones() {
    return this.clientForm.get('phones') as FormArray;
  }

  addPhone() {
    this.phones.push(this.fb.control(''));
  }


  updateForm() {
    this.clientForm.patchValue({
      firstName: 'Nancy',
      lastName: 'Bay',
      age: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  updateForm2() {
    this.clientForm.setValue({
      firstName: 'Nancy',
      lastName: 'Bay',
      //age: 'Nancy',
      address: {
        street: '123 Drew Street',
        city: 'London',
        state: 'Penthouse',
        zip: 123456,
      }
    });
  }

  updateForm3() {
    this.clientForm.controls.firstName.setValue("MIA");
  }

  constructor(private fb: FormBuilder) {
  }


  // BEGIN BUILT-IN VALIDATORS

  // clientForm!:FormGroup;

  // defaultClient = { firstName: 'Dee', lastName: 'Cameron', email:''};

  // ngOnInit(): void {
  //   this.clientForm= new FormGroup({
  //   firstName: new FormControl(this.defaultClient.firstName,
  //     [Validators.required,
  //     Validators.minLength(4),
  //     this.forbiddenNameValidator(/bob/i)
  //   ]),
  //   lastName: new FormControl(this.defaultClient.lastName),
  //   email: new FormControl(this.defaultClient.email, [Validators.required, Validators.email]),
  // });
  // }
  //   forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const forbidden = nameRe.test(control.value);
  //     return forbidden ? { forbiddenName: { value: control.value } } : null;
  //   };
  // }

  // END BUILT-IN VALIDATORS


  // BEGIN ADDING CROSS-VALIDATION TO REACTIVE FORMS
  clientForm!: FormGroup;
  defaultClient = { firstName: 'Dee', lastName: 'Cameron', email: '' };
  ngOnInit(): void {
    this.clientForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      remail: new FormControl('', [Validators.required, Validators.email]),
    }, { validators: this.rewriteValidationEmailValidator });
  }

  rewriteValidationEmailValidator: ValidatorFn = (control: AbstractControl)
    : ValidationErrors | null => {
    const email = control.get('email');
    const remail = control.get('remail');
    return email && remail && email.value !== remail.value ? { rewriteValidationEmail: true } : null;
  };



  // ENDS ADDING CROSS-VALIDATION TO REACTIVE FORMS



  // updateName(){
  // this.name.setValue("Alejandra");
  // }

  onSubmit(): void {
    // console.warn(this.clientForm.value);
  }


}
