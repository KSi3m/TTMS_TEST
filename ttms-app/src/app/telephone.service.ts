import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Telephone } from './Telephone';

@Injectable({
  providedIn: 'root'
})
export class TelephoneService {

  constructor(private http:HttpClient) { }
  private apiUrl: string = "https://localhost:7222/api/telephones"

  getTelephones() : Observable<Telephone[]>
  {
    return this.http.get<Telephone[]>(this.apiUrl);
  }

  getTelephone(id:number) : Observable<Telephone>
  {
    return this.http.get<Telephone>(this.apiUrl+'/'+id);
  }

  deleteTelephone(id:number) : Observable<void>
  {
    return this.http.delete<void>(this.apiUrl+'/'+id);
  }

  
  updateTelephone(telephone: Telephone) : Observable<void>
  {
    return this.http.put<void>(this.apiUrl+'/'+telephone.id,telephone);
  }
  createTelephone(telephone: Telephone) : Observable<void>
  {
    return this.http.put<void>(this.apiUrl,telephone);
  }

}
