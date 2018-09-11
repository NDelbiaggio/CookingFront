import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { FormControl, Validators, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit, OnDestroy {
  
  category = new FormControl('', Validators.pattern(/^(?!.*Categories).*$/));
  
  subscription: Subscription;
  lstCategories: [];
  
  constructor(private categoryService: CategoriesService) { }
  
  ngOnInit() {
    this.subscription = this.categoryService.getCategories().subscribe(categories => {
      this.lstCategories = categories;
      console.log(this.lstCategories)
    });
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
