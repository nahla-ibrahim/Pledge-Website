import { Component, inject, input } from '@angular/core';
import { InstractorType } from '../../../Types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-card',
  imports: [],
  templateUrl: './instructor-card.html',
  styleUrl: './instructor-card.css',
})
export class InstructorCard {
  data = input.required<InstractorType>();
  router = inject(Router);
  enroll(Id: string) {
    this.router.navigate(['instructorCourses', Id]);
  }
}
