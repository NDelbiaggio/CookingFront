import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  title ="Create steps"
  imgRecipe = "https://thumbs.dreamstime.com/b/pr%C3%A9paration-faite-maison-de-recette-de-pain-de-pizza-ou-de-tarte-de-la-p%C3%A2te-le-boulanger-f%C3%A9minin-remet-le-roulement-81862446.jpg;"
  txt ="nkjenfdjknvjsdbjhdabvjhbvjhbdfafv v bvjh bhjvbdjhvbhjdb vjhdb svjhs  vjv sjdj vjd bvjsnvdbje jhr shjfbjhs vjh";
  txt2 = "jhas dkjasnkdjnajkdnaskj ldalvday flvmad ljf dla vlda yvkds kjfvdkjybv kjadmyb vjdksb vjdksy fvljsdn kjdsnvkjsdnvkjsdvkjdsb jvsdby kjvb dsk vksd vksdnfojlsdnvodsnfvlsjdnfojs";
  constructor() { }

  ngOnInit() {
  }

}
