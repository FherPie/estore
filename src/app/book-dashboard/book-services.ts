import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const NOMBRES_LIBROS = ['Troya', 'Orgullo y prejuicio'];

@Injectable({ providedIn: 'root' })
export class BookServices {
    isNameTaken(nombre: string): Observable<boolean> {
    console.log("HOLA HIJO");
    const isTaken = NOMBRES_LIBROS.includes(nombre);
    return of(isTaken).pipe(delay(400));
  }
}
