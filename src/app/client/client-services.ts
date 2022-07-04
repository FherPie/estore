import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const EMAILS = ['pieandres@yahoo.com'];

@Injectable({ providedIn: 'root' })
export class ClientServices {
    isEmailTaken(email: string): Observable<boolean> {
    const isTaken = EMAILS.includes(email);
    return of(isTaken).pipe(delay(400));
  }
}
