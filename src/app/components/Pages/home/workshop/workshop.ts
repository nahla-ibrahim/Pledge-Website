import { Component, inject, OnInit, signal } from '@angular/core';
import { allServices } from '../../../../services/allServices';
import { CourseType } from '../../../../Types';
import { CoursesCard } from '../../../shared/courses-card/courses-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-workshop',
  imports: [CoursesCard, RouterLink],
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
        const changeResponse = res.internships.slice(0, 4);

        this.workshops.set(changeResponse);
      },
      error: (err) => console.log(Error),
    });
  }
}
