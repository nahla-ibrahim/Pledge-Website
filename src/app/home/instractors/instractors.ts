import { Component, inject, OnInit, signal } from '@angular/core';
import { InstructorCard } from '../../shared/instructor-card/instructor-card';
import { InstractorType } from '../../Types';
import { allServices } from '../../services/allServices';

@Component({
  selector: 'app-instractors',
  imports: [InstructorCard],
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
        this.instructors.set(res.instractors);
      },
      error: (err) => console.log(Error),
    });
  }
}
