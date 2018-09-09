import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IngredientsService } from './services/ingredients.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipesService } from './services/recipes.service';

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
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:"", 
        component:HomepageComponent
      },
      {
        path:"ingredients/:id", 
        component:IngredientComponent
      },
      {
        path:"ingredients", 
        component:IngredientsComponent
      },
      {
        path:"recipes/:id", 
        component:RecipeComponent
      },
      {
        path:"recipes", 
        component:RecipesComponent
      },
      {
        path:"**", 
        component:NotFoundComponent
      }
    ])
  ],
  providers: [
    IngredientsService,
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
