import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IngredientsComponent } from "./ingredients/ingredients.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { IngredientComponent } from "./ingredient/ingredient.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
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
