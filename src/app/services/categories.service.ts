import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { environment } from "../../environments/environment";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url = environment.apiUrl + "/api/categories";
  constructor(private http: Http) {}

  getCategories() {
    return this.http.get(this.url).pipe(
      map(response => {
        return response.json();
      }),
      catchError(err => {
        console.log(err.status);
        return of([]);
      })
    );
  }
  
}
