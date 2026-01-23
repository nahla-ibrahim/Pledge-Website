import { Component, inject, input } from '@angular/core';
import { CourseType } from '../../../Types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-card',
  imports: [],
  templateUrl: './courses-card.html',
  styleUrl: './courses-card.css',
})
export class CoursesCard {
  router = inject(Router);
  enroll(courseId: string) {
    this.router.navigate(['enroll', this.type(), courseId]);
  }
  data = input.required<CourseType>();
  type = input.required<'courses' | 'interships' | 'workshops'>();
}
