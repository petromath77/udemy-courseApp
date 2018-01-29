import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('A Tasty Pizza', 
        'This is a delicious pizza', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/260px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        [
            new Ingredient('Dough', 1),
            new Ingredient('Cheese', 2)
        ]),
        new Recipe('Fresh & Soft Pie', 
        'So Tasty Pie!', 
        'https://timedotcom.files.wordpress.com/2015/07/360_pie_1125.jpg?quality=85',
        [
            new Ingredient('Dough', 1),
            new Ingredient('Jam', 1)
        ])
      ];
    constructor(private shoppingListService: ShoppingListService){}

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index: number){
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}