import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IngredientsComponent } from "./ingredients/ingredients.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { IngredientComponent } from "./ingredient/ingredient.component";
import { IngredientFormComponent } from "./forms/ingredient-form/ingredient-form.component";
import { RecipeFormComponent } from "./forms/recipe-form/recipe-form.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "ingredient/form",
    component: IngredientFormComponent
  },
  {
    path: "ingredients/:id",
    component: IngredientComponent
  },
  {
    path: "ingredients",
    component: IngredientsComponent
  },
  {
    path: "recipe/form",
    component: RecipeFormComponent
  },
  {
    path: "recipes/:id",
    component: RecipeComponent
  },
  {
    path: "recipes",
    component: RecipesComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
