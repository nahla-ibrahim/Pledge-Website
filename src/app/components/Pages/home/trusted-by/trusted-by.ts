import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserFriends, faBook, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trusted-by',
  imports: [FontAwesomeModule],
  templateUrl: './trusted-by.html',
  styleUrl: './trusted-by.css',
})
export class TrustedBy implements AfterViewInit {
  userFriends = faUserFriends;
  book = faBook;
  personChalkboard = faPersonChalkboard;

  @ViewChild('statsSection') statsSection!: ElementRef;

  students = 0;
  courses = 0;
  instructors = 0;

  private animated = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.animated) {
          this.animated = true;
          this.animateCount('students', 10000);
          this.animateCount('courses', 100);
          this.animateCount('instructors', 50);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(this.statsSection.nativeElement);
  }

  animateCount(property: 'students' | 'courses' | 'instructors', target: number) {
    const duration = 1500;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      this[property] = Math.floor(progress * target);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this[property] = target;
      }
    };
    requestAnimationFrame(step);
  }
}
