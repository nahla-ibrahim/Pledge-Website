import { Component, signal, HostListener, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faSearch,
  faMoon,
  faSun,
  faClose,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CourseType } from '../../../Types';
import { allServices } from '../../../services/allServices';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  imports: [FontAwesomeModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {
  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (theme == 'dark') {
      this.isDark.set(true);
    }
  }

  bars = faBars;
  close = faClose;
  search = faSearch;
  angleDown = faAngleDown;
  moon = faMoon;
  sun = faSun;

  router = inject(Router);
  route = inject(ActivatedRoute);
  serve = inject(allServices);
  courses = signal<CourseType[]>([]);
  isDark = signal<boolean>(false);
  isScrolled = signal(false);
  isOpen = signal(false);
  openServices = signal(false);
  isSearchOpen = false;
  searchTerm = signal<string>('');
  btn: ('courses' | 'internships' | 'workshops')[] = ['courses', 'internships', 'workshops'];
  activeBtn = signal<'courses' | 'internships' | 'workshops'>('courses');
  currentID = signal<string>('');

  toggle() {
    this.isOpen.set(!this.isOpen());
  }
  darkMode() {
    const theme = localStorage.getItem('theme');
    if (theme !== 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      this.isDark.set(true);
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      this.isDark.set(false);
    }
  }
  toggleServices() {
    this.openServices.set(!this.openServices());
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  openNewRoute() {
    this.isOpen = signal(false);
  }

  reloadcourses(type: 'courses' | 'internships' | 'workshops') {
    this.searchTerm.set('');
    this.courses.set([]);
    this.activeBtn.set(type);
  }

  filteredCourses(text: string) {
    this.searchTerm.set(text);

    if (text === '') {
      this.courses.set([]);
    } else {
      this.serve.getData().subscribe({
        next: (res) => {
          const filtered = res[this.activeBtn()].filter((course) =>
            course.title.toLowerCase().includes(text.toLowerCase()),
          );
          this.courses.set(filtered);
        },
      });
    }
  }
  openSearch() {
    this.isSearchOpen = true;
  }

  closeSearch() {
    this.isSearchOpen = false;
    this.searchTerm.set('');
    this.activeBtn.set('courses');
    this.courses.set([]);
  }

  enroll(courseId: string) {
    this.currentID.set(courseId);
    this.isOpen.set(false);
    this.isSearchOpen = false;
    this.searchTerm.set('');
    this.courses.set([]);
    this.router.navigate(['enroll', this.activeBtn(), courseId]);
  }
}
