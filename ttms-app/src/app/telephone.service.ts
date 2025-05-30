import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelephoneService {

  constructor(private http:HttpClient) { }

  //getBooks() : Observable<>

}
