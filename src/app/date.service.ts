import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getDate() {
    // return this.list;
    return new Observable((observer)=>{
        observer.next(new Date());
    })
}

}
