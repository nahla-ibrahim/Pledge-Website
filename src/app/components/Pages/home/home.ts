import { Component } from '@angular/core';
import { Header } from './header/header';
import { TrustedBy } from './trusted-by/trusted-by';
import { Courses } from './courses/courses';
import { Why } from './why/why';
import { Instractors } from './instractors/instractors';
import { Testimonials } from './testimonials/testimonials';
import { Workshop } from './workshop/workshop';
import { internships } from './internships/internships';

@Component({
  selector: 'app-home',
  imports: [Header, TrustedBy, Courses, Why, Instractors, Testimonials, Workshop, internships],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
