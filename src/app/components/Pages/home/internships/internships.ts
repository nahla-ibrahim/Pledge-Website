import { Component, inject, signal } from '@angular/core';
import { allServices } from '../../../../services/allServices';
import { CourseType } from '../../../../Types';
import { CoursesCard } from '../../../shared/courses-card/courses-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-internships',
  imports: [CoursesCard, RouterLink],
  templateUrl: './internships.html',
  styleUrl: './internships.css',
})
export class internships {
  ngOnInit(): void {
    this.getAllCourses();
  }
  courseServ = inject(allServices);
  internships = signal<CourseType[]>([]);

  getAllCourses() {
    this.courseServ.getData().subscribe({
      next: (res) => {
        const changeResponse = res.internships.slice(0, 4);
        this.internships.set(changeResponse);
      },
      error: (err) => console.log(Error),
    });
  }
}
