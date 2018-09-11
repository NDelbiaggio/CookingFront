import { Component, OnInit, OnDestroy } from "@angular/core";
import { IngredientsService } from "../services/ingredients.service";
import { Subscription } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "app-ingredients",
  templateUrl: "./ingredients.component.html",
  styleUrls: ["./ingredients.component.scss"]
})
export class IngredientsComponent implements OnInit, OnDestroy {
  ingredientsForRecipe: any[];
  ingredientsList: any[];

  search: string = "";
  nbPages: number = 0;

  subscription: Subscription;

  constructor(private service: IngredientsService) {
    this.ingredientsList = [];
    this.ingredientsForRecipe = [];
  }

  ngOnInit() {
    this.filterIngredients();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addIngredientToRecipe(quantity, ingredient) {
    this.ingredientsForRecipe.push({ quantity, ingredient });
  }

  removedIngFromRecipe(ingredient) {
    let ind = this.ingredientsForRecipe.findIndex(igrd => {
      return igrd.ingredient._id == ingredient._id;
    });
    this.ingredientsForRecipe.splice(ind, 1);
  }

  filterIngredients(page = 1) {
    var param = {
      query: { name: this.search },
      options: { page, limit: 18 }
    };

    if (this.subscription) this.subscription.unsubscribe();

    this.subscription = this.service
      .getIngredients(param)
      .pipe(take(1))
      .subscribe(res => {
        this.ingredientsList = res.docs;
        this.nbPages = Math.ceil(res.total / res.limit);
      });
  }
}
