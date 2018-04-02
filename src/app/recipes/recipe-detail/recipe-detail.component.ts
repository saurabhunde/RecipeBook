import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute,Params } from "@angular/Router";

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe : Recipe;
  recipeId : number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.recipeId = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.recipeId);
      }
    );
  }

  onEditRecipe(){
    this.router.navigate(['./edit'],{relativeTo:this.route});
  }
  onAddToShoppingList() {
    //this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
