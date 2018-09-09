import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  ingredientsList;
  constructor(private service: IngredientsService) {
    service.getIngredients().subscribe(
      response =>{
      this.ingredientsList =response.json();
      console.log(response.json());
    },
      (error : Response)=>{
        if(error.status === 404){
          console.log(error.statusText)
        }else{
          alert("Uuuuewww bad news...")
        console.log(error);
        }
      
    })
   }

  ngOnInit() {
  }

}
