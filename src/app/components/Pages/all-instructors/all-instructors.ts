import { Component, inject, signal } from '@angular/core';
import { InstructorCard } from '../../shared/instructor-card/instructor-card';
import { InstractorType } from '../../../Types';
import { allServices } from '../../../services/allServices';

@Component({
  selector: 'app-all-instructors',
  imports: [InstructorCard],
  templateUrl: './all-instructors.html',
  styleUrl: './all-instructors.css',
})
export class AllInstructors {
  serve = inject(allServices);
  instructors = signal<InstractorType[]>([]);

  ngOnInit(): void {
    this.getAllInstructors();
  }

  getAllInstructors() {
    this.serve.getData().subscribe({
      next: (res) => {
        this.instructors.set(res.instractors);
      },
      error: (err) => console.log(Error),
    });
  }
}
