import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a test', 'http://edu-town.com/wp-content/uploads/2017/08/reading-a-recipe-worksheet.jpg'),
    new Recipe('A Test Recipe', 'This is a simply a test', 'http://edu-town.com/wp-content/uploads/2017/08/reading-a-recipe-worksheet.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
