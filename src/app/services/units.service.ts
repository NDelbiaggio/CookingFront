import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { environment } from "../../environments/environment";
import { map, catchError } from "rxjs/operators";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  private url = environment.apiUrl + "/api/units";
  constructor(private http : Http) { }

  getUnits() : Observable<any[]>{
   return this.http.get(this.url).pipe(
      map(res => {
        return res.json();
      }),
      catchError(err =>{
        console.log(err.status);
        return of([]);
      })
    )
  }

  postUnit(unit : HTMLInputElement){
    this.http.post(this.url, unit)
    .subscribe(response=>{
      console.log(response.json());
    })
  }

  deleteUnit(id : String){
    this.http.delete(`${this.url}/${id}`)
    .subscribe(response =>{
      console.log(response.json());
    })
  }
}
