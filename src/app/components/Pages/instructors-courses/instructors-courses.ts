import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allServices } from '../../../services/allServices';
import { CourseType } from '../../../Types';
import { CoursesCard } from '../../shared/courses-card/courses-card';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-instructors-courses',
  imports: [CoursesCard, NgClass],
  templateUrl: './instructors-courses.html',
  styleUrl: './instructors-courses.css',
})
export class InstructorsCourses implements OnInit {
  ngOnInit(): void {
    this.reloadcourses(this.activeBtn());
  }
  instructorId: string = '';
  route = inject(ActivatedRoute);
  serve = inject(allServices);
  getServices = inject(allServices);
  instructorCourses = signal<CourseType[]>([]);
  btn = ['courses', 'internships', 'workshops'];
  activeBtn = signal('Course');

  reloadcourses(type: string) {
    this.activeBtn.set(type);
    this.instructorId = this.route.snapshot.params['id'];
    this.serve.getData().subscribe({
      next: (res) => {
        if (type === 'internships') {
          const instructorInternships = res.internships.filter(
            (internship) => internship.instructorId === this.instructorId,
          );
          this.instructorCourses.set(instructorInternships);
        } else if (type === 'workshops') {
          const instructorWorkshops = res.workshops.filter(
            (workshop) => workshop.instructorId === this.instructorId,
          );
          this.instructorCourses.set(instructorWorkshops);
        } else {
          const instructorCourses = res.courses.filter(
            (course) => course.instructorId === this.instructorId,
          );
          this.instructorCourses.set(instructorCourses);
        }
      },
      error: (err) => console.log(Error),
    });
  }
}
