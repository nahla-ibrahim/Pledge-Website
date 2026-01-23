import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allServices } from '../../../services/allServices';
import { CourseType } from '../../../Types';
import { map } from 'rxjs';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-enroll-form',
  imports: [ReactiveFormsModule, NgClass, FontAwesomeModule],
  templateUrl: './enroll-form.html',
  styleUrl: './enroll-form.css',
})
export class EnrollForm implements OnInit {
  courseId!: string;
  route = inject(ActivatedRoute);
  services = inject(allServices);
  router = inject(Router);
  course = signal<CourseType | null>(null);
  isEnroll = signal<boolean>(false);
  check = faCheck;

  ngOnInit(): void {
    type typeOfCourses = 'courses' | 'interships' | 'workshops';
    const id = this.route.snapshot.paramMap.get('id');
    const type = this.route.snapshot.paramMap.get('type') as typeOfCourses;
    if (!id) return;
    this.courseId = id;
    this.services
      .getData()
      .pipe(map((res) => res[type].find((x) => x.id === this.courseId)))
      .subscribe((course) => this.course.set(course ?? null));
  }

  enrollForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern(/^[a-zA-Z\u0600-\u06FF\s]+$/),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(14),
      Validators.max(60),
      Validators.pattern(/^[0-9]+$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.pattern(/^01[0,1,2,5][0-9]{8}$/),
    ]),
  });

  get fullName() {
    return this.enrollForm.get('fullName') as FormControl;
  }
  get age() {
    return this.enrollForm.get('age') as FormControl;
  }
  get email() {
    return this.enrollForm.get('email') as FormControl;
  }
  get phoneNumber() {
    return this.enrollForm.get('phoneNumber') as FormControl;
  }

  enroll() {
    if (this.enrollForm.invalid) return;
    if (this.enrollForm.valid) {
      this.isEnroll.set(true);
      console.log(this.isEnroll());
    }
  }
  closeModal() {
    this.isEnroll.set(false);
    this.router.navigate(['/']);
  }
}
