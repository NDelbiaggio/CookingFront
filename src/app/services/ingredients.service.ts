import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class IngredientsService {
  private url='http://localhost:3900/api/ingredients';
  constructor(private http : Http) {}

  getIngredients(){
    return this.http.get(this.url);
  }
}
