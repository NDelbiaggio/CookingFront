import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../../environments/environment";

import { map, catchError } from "rxjs/operators";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class IngredientsService {
  private url = environment.apiUrl + "/api/ingredients";
  constructor(private http: Http) {}

  getIngredient(id: String) {
    return this.http.get(`${this.url}/${id}`).pipe(
      map(res => res.json()),
      catchError(err => {
        console.log(err.status);
        return of([]);
      })
    );
  }

  getIngredients(opt?): Observable<any> {
    return this.http.get(this.url, { params: opt || {} }).pipe(
      map(response => {
        return response.json();
      }),
      catchError(err => {
        console.log(err.status);
        return of([]);
      })
    );
  }

  postIngredient(ing: HTMLInputElement) {
    this.http.post(this.url, ing).subscribe(response => {
      console.log(response.json());
    });
  }
}
