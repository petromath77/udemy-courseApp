import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simply a test', 'https://ds03.infourok.ru/uploads/ex/0654/00018cf3-61058dac/310/img9.jpg'),
        new Recipe('Another Test Recipe', 'This is a simply a test', 'https://s-media-cache-ak0.pinimg.com/236x/9a/41/fb/9a41fbb6c6a85e09016b86e2bc15548e.jpg')
      ];
    
    getRecipes(){
        return this.recipes.slice();
    }
}