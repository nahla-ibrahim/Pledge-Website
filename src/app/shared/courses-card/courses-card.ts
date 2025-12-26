import { Component, inject, input } from '@angular/core';
import { CourseType } from '../../Types';

@Component({
  selector: 'app-courses-card',
  imports: [],
  templateUrl: './courses-card.html',
  styleUrl: './courses-card.css',
})
export class CoursesCard {
  data = input.required<CourseType>();
}
