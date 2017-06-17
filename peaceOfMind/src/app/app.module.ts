import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeekDayComponent } from './week-day/week-day.component';
import { MealComponent } from './meal/meal.component';

@NgModule({
  declarations: [
    AppComponent,
    WeekDayComponent,
    MealComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
