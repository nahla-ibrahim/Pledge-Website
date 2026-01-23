import { Component, inject, OnInit, signal } from '@angular/core';
import { allServices } from '../../../../services/allServices';
import { CourseType } from '../../../../Types';
import { CoursesCard } from '../../../shared/courses-card/courses-card';

@Component({
  selector: 'app-workshop',
  imports: [CoursesCard],
  templateUrl: './workshop.html',
  styleUrl: './workshop.css',
})
export class Workshop implements OnInit {
  ngOnInit(): void {
    this.getAllCourses();
  }
  courseServ = inject(allServices);
  workshops = signal<CourseType[]>([]);

  getAllCourses() {
    this.courseServ.getData().subscribe({
      next: (res) => {
        this.workshops.set(res.workshops);
        console.log(res.workshops);
      },
      error: (err) => console.log(Error),
    });
  }
}
