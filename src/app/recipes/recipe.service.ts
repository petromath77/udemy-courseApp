import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Tasty Pizza', 
        'This is a delicious pizza', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/260px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        [
            new Ingredient('Dough', 1),
            new Ingredient('Cheese', 0.5)
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
    getRecipes(){
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}