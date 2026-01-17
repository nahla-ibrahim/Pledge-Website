import { Component } from '@angular/core';
import { Header } from './header/header';
import { TrustedBy } from './trusted-by/trusted-by';
import { Courses } from './courses/courses';
import { Why } from './why/why';
import { Nav } from '../shared/nav/nav';
import { Instractors } from './instractors/instractors';
import { Testimonials } from './testimonials/testimonials';
import { Footer } from '../shared/footer/footer';
import { Workshop } from './workshop/workshop';
import { Interships } from './interships/interships';

@Component({
  selector: 'app-home',
  imports: [Header, TrustedBy, Courses, Why, Instractors, Testimonials, Workshop, Interships],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
