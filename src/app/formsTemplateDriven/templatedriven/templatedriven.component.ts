import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/Libro';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  miLibro= new Libro(0, "", "", 0);

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(form: any): void{
   console.log(form.value);
  }

}
