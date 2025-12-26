import { Component, inject, OnInit, signal } from '@angular/core';
import { CoursesCard } from '../../shared/courses-card/courses-card';
import { CourseType } from '../../Types';
import { allServices } from '../../services/allServices';

@Component({
  selector: 'app-courses',
  imports: [CoursesCard],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit {
  ngOnInit(): void {
    this.getAllCourses();
  }
  courseServ = inject(allServices);
  courses = signal<CourseType[]>([]);

  getAllCourses() {
    this.courseServ.getData().subscribe({
      next: (res) => {
        this.courses.set(res.courses);
      },
      error: (err) => console.log(Error),
    });
  }
}
