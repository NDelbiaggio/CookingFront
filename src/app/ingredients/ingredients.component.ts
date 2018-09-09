import { Component, OnInit, OnDestroy } from "@angular/core";
import { IngredientsService } from "../services/ingredients.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-ingredients",
  templateUrl: "./ingredients.component.html",
  styleUrls: ["./ingredients.component.scss"]
})
export class IngredientsComponent implements OnInit, OnDestroy {
  ingredientsList;

  subscription: Subscription;

  constructor(private service: IngredientsService) {}

  ngOnInit() {
    this.subscription = this.service.getIngredients().subscribe(ingredients => {
      this.ingredientsList = ingredients;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
