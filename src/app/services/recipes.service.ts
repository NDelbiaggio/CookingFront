import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  private url = environment.apiUrl + "/api/recipes";
  constructor(private http: Http) {}

  getRecipes() {
    return this.http.get(this.url);
  }
}
