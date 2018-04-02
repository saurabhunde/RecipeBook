import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/Router'

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeLoadComponent } from './recipes/recipe-load/recipe-load.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes : Routes =[
    {path:'recipes',component:RecipesComponent, children:[
      {path:'',component:RecipeLoadComponent},
      {path:'new', component:RecipeEditComponent},
      {path:':id', component:RecipeDetailComponent},
      {path:':id/edit', component:RecipeEditComponent}
    ]},
    {path:'shopping_list', component:ShoppingListComponent},
    {path:'',redirectTo:'/recipes',pathMatch:'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
