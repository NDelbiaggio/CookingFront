import { IngredientsService } from "./../services/ingredients.service";
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-ingredient",
  templateUrl: "./ingredient.component.html",
  styleUrls: ["./ingredient.component.scss"]
})
export class IngredientComponent implements OnInit {
  @Input("ingredient")
  ingredient: any;

  constructor(
    private ingredientService: IngredientsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get("id");
      this.ingredientService.getIngredient(id).subscribe(ingredient => {
        this.ingredient = ingredient;
      });
    });
  }
}
