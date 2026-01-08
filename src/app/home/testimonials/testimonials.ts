import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  [x: string]: any;
  currentIndex = 0;

  testimonials = [
    {
      id: 1,
      name: 'Samy Ali',
      role: 'ReviewCollector / CEO',
      image: 'assets/inst3.jpg',
      text: 'It’s the best plugin for that purpose...',
    },
    {
      id: 2,

      name: 'Nora Ahmed',
      role: 'Digital Marketing Course',
      image: 'assets/inst4.jpeg',
      text: 'This digital marketing course is one of the best courses I have ever attended.The instructor is very professional, and the place is well-organized.',
    },
    {
      id: 3,

      name: 'Noah Mostafa',
      role: 'English Course',
      image: 'assets/inst2.jpg',
      text: 'This digital marketing course is one of the best courses I have ever attended.The instructor is very professional, and the place is well-organized.',
    },
  ];

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }
}
