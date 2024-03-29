import { EventEmitter } from "@angular/core";
import { Ingredient } from "./shared/ingredient.model";

export class ShoppingListService {

    ingredientsChanged = new EventEmitter();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        return [...this.ingredients];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit()
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.emit()
    }
}