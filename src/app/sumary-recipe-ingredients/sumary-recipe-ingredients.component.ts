import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "sumary-recipe-ingredients",
  templateUrl: "./sumary-recipe-ingredients.component.html",
  styleUrls: ["./sumary-recipe-ingredients.component.scss"]
})
export class SumaryRecipeIngredientsComponent implements OnInit {
  @Input("ingredients")
  ingredients: any[] = [];

  @Output("removed")
  hasBeenRemoved: EventEmitter<any>;

  constructor() {
    this.hasBeenRemoved = new EventEmitter<any>();
  }

  ngOnInit() {}

  removeIngredient(ingredient) {
    this.hasBeenRemoved.emit(ingredient);
  }
}
