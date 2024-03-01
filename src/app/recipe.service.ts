import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes/recipe.model";
import { Ingredient } from "./shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {

    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a test', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Meat',1),
            ]
        ),
        new Recipe(
            'Another Test Recipe',
            'This is simply a test', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Olive Oil', 5),
            ]
        )
    ];

    recipeSelected = new EventEmitter<Recipe>()

    getRecipes() {
        return [...this.recipes];
    }

    addIngredientsToList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    }
}