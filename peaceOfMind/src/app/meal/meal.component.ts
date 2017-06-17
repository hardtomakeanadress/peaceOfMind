import { Component, OnInit } from '@angular/core';
import { meals } from './../../data/meals';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  constructor() { }

  meals: Array<any> = meals;

  ngOnInit() {
  }
}
