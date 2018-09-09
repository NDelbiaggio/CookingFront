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

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    HomepageComponent,
    NotFoundComponent,
    RecipesComponent,
    RecipeComponent,
    IngredientComponent,
    NavbarComponent
  ],
  imports: [HttpModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
