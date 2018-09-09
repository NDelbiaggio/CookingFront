import { Component, OnInit } from '@angular/core';
import { Http } from '../../../../node_modules/@angular/http';
import { CategoriesService } from '../../services/categories.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})

export class IngredientFormComponent implements OnInit {

  categoriesList;

  subscription: Subscription;

  form = new FormGroup({
    name : new FormControl('', Validators.required),
    image : new FormControl('', Validators.required),
    category : new FormControl('', Validators.pattern(/^(?!.*Categories).*$/)),
    description : new FormControl('', Validators.required)
  });

  constructor(private cs: CategoriesService, private is : IngredientsService) {}
  
  get name(){
    return this.form.get('name');
  }

  get image(){
    return this.form.get('image');
  }

  get category(){
    return this.form.get('category');
  }

  get description(){
    return this.form.get('description');
  }

  ngOnInit() {
    this.subscription = this.cs.getCategories().subscribe(categories => {
      this.categoriesList = categories;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createIngredient(f){
    this.is.postIngredient(f);
  }

}
