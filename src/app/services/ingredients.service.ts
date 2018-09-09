import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../../environments/environment";

import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class IngredientsService {
  private url = environment.apiUrl + "/api/ingredients";
  constructor(private http: Http) {}

  getIngredients() {
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
