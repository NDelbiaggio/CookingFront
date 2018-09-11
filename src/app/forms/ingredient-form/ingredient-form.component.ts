import { Component, OnInit} from '@angular/core';
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
  
  constructor(private cs: CategoriesService, private ingredientService : IngredientsService){}
    
  form: FormGroup;
  get name(){return this.form.get('name');}
  get image(){return this.form.get('image');}
  get description(){return this.form.get('description');}
  get category(){return this.form.get('category');}


  ngOnInit() {
    this.form = new FormGroup({
      name : new FormControl('', Validators.required),
      image : new FormControl('', Validators.required),
      category : new FormControl('', Validators.pattern(/^(?!.*Categories).*$/)),
      description : new FormControl('', Validators.required)
    });

    this.subscription = this.cs.getCategories().subscribe(categories => {
      this.categoriesList = categories;
    });
  }

  ngOnDestroy(): void {this.subscription.unsubscribe();}

  createIngredient(ingredient){
    this.ingredientService.postIngredient(ingredient);
  }

}
