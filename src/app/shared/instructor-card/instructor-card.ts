import { Component, input } from '@angular/core';
import { InstractorType } from '../../Types';

@Component({
  selector: 'app-instructor-card',
  imports: [],
  templateUrl: './instructor-card.html',
  styleUrl: './instructor-card.css',
})
export class InstructorCard {
  data = input.required<InstractorType>();
}
