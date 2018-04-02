import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from "@angular/Router/";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeId:number;
  editMode = false;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        console.log("params",params)
        this.recipeId= +params['id'];
        this.editMode = params['id'] != null;
      }
    );
  }

}
