import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allServices } from '../../../services/allServices';
import { CourseType, InstractorType } from '../../../Types';
import { CoursesCard } from '../../shared/courses-card/courses-card';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-instructor-profile',
  imports: [CoursesCard, NgClass],
  templateUrl: './instructor-profile.html',
  styleUrl: './instructor-profile.css',
})
export class InstructorProfile {
  selectedTab: 'courses' | 'trainings' | 'workshops' = 'courses';

  route = inject(ActivatedRoute);
  service = inject(allServices);
  instructor = signal<InstractorType | undefined>(undefined);

  ngOnInit(): void {
    console.log(this.activeBtn());
    this.reloadcourses(this.activeBtn());
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.getData().subscribe((res) => {
        const findInst = res.instractors.find((inst) => inst.id === id);
        this.instructor.set(findInst);
      });
      console.log(this.instructor);
    }
  }

  changeTab(tab: 'courses' | 'trainings' | 'workshops') {
    this.selectedTab = tab;
  }

  instructorId: string = '';
  serve = inject(allServices);
  getServices = inject(allServices);
  instructorCourses = signal<CourseType[]>([]);
  btn = ['courses', 'internships', 'workshops'];

  activeBtn = signal('courses');

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
