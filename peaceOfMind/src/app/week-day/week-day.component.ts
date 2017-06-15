import { Component, OnInit } from '@angular/core';
import { days } from './../../data/days';
@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.css']
})
export class WeekDayComponent implements OnInit {

  days: Array<any> = days;

  constructor() { }

  ngOnInit() {
  }

}
