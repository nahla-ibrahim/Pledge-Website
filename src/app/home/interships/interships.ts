import { Component, inject, signal } from '@angular/core';
import { allServices } from '../../services/allServices';
import { CourseType } from '../../Types';
import { CoursesCard } from '../../shared/courses-card/courses-card';

@Component({
  selector: 'app-interships',
  imports: [CoursesCard],
  templateUrl: './interships.html',
  styleUrl: './interships.css',
})
export class Interships {
  ngOnInit(): void {
    this.getAllCourses();
  }
  courseServ = inject(allServices);
  interships = signal<CourseType[]>([]);

  getAllCourses() {
    this.courseServ.getData().subscribe({
      next: (res) => {
        this.interships.set(res.interships);
        console.log(res.interships);
      },
      error: (err) => console.log(Error),
    });
  }
}
