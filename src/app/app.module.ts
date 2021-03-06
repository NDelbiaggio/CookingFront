import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { IngredientsService } from "./services/ingredients.service";
import { RecipesService } from "./services/recipes.service";

import { NavbarComponent } from "./navbar/navbar.component";

import { AppComponent } from "./app.component";
import { IngredientsComponent } from "./ingredients/ingredients.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { IngredientComponent } from "./ingredient/ingredient.component";
import { IngredientFormComponent } from "./forms/ingredient-form/ingredient-form.component";
import { FormsModule } from '@angular/forms';
import { RecipeFormComponent } from './forms/recipe-form/recipe-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { IngredientSelectorComponent } from "./ingredient-selector/ingredient-selector.component";
import { SumaryRecipeIngredientsComponent } from './sumary-recipe-ingredients/sumary-recipe-ingredients.component';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    HomepageComponent,
    NotFoundComponent,
    RecipesComponent,
    RecipeComponent,
    IngredientComponent,
    NavbarComponent,
    IngredientFormComponent,
    RecipeFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
