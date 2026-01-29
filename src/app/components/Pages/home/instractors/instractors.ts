import { Component, inject, OnInit, signal } from '@angular/core';
import { InstructorCard } from '../../../shared/instructor-card/instructor-card';
import { InstractorType } from '../../../../Types';
import { allServices } from '../../../../services/allServices';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-instractors',
  imports: [InstructorCard, RouterLink],
  templateUrl: './instractors.html',
  styleUrl: './instractors.css',
})
export class Instractors implements OnInit {
  ngOnInit(): void {
    this.getInstructors();
  }
  instructors = signal<InstractorType[]>([]);
  serv = inject(allServices);

  getInstructors() {
    this.serv.getData().subscribe({
      next: (res) => {
        const changeResponse = res.instractors.slice(0, 4);
        this.instructors.set(changeResponse);
      },
      error: (err) => console.log(Error),
    });
  }
}
