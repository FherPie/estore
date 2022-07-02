import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/Libro';

@Component({
  selector: 'app-book-create-form',
  templateUrl: './book-create-form.component.html',
  styleUrls: ['./book-create-form.component.css']
})
export class BookCreateFormComponent implements OnInit {

title="Books-Template Driven"

 genders=["Drama", "Terror", "Suspense"];

  miLibro= new Libro(0, "", "", 0);

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(form: any): void{
   console.log(form.value);
  }

}
