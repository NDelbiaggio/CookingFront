import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipesList;
  constructor(private service: RecipesService) {

    service.getRecipes().subscribe(
      response =>{
        this.recipesList = response.json();
        console.log(response.json());
      },
      (error : Response)=>{
        if(error.status === 404){
          console.log(error.statusText)
        }else{
          alert("Uuuuewww bad news...")
        console.log(error);
        }
      })}

  ngOnInit() {
  }

}
