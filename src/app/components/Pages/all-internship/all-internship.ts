import { Component, inject, OnInit, signal } from '@angular/core';
import { FilterAndSearch } from '../../shared/filter-and-search/filter-and-search';
import { CoursesCard } from '../../shared/courses-card/courses-card';
import { Router } from '@angular/router';
import { allServices } from '../../../services/allServices';
import { categories, CourseType } from '../../../Types';
import { InfinityScroll } from '../../../directive/infinity-scroll';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-intership',
  imports: [CoursesCard, InfinityScroll, FormsModule, FilterAndSearch],
  templateUrl: './all-internship.html',
  styleUrl: './all-internship.css',
})
export class Allinternship {
  router = inject(Router);
  getServices = inject(allServices);
  allCourses = signal<CourseType[]>([]);
  filterdCourses = signal<CourseType[]>([]);
  search = signal<string>('');
  selectedCategory = signal<string>('');
  categories = signal<categories[]>([]);
  page = signal<number>(0);
  loading = signal<boolean>(false);
  hasMore = signal<boolean>(true);

  enroll(courseId: string) {
    this.router.navigate(['enroll', 'intership', courseId]);
  }

  filterCourses(cat: string, search: string, currentCourses: CourseType[]) {
    const couress = currentCourses.filter(
      (course) =>
        (course.category == cat || cat == '') &&
        course.title.toLowerCase().includes(search.toLowerCase()),
    );
    this.filterdCourses.set(couress);
  }

  changeCategory(cat: string) {
    this.filterCourses(cat, this.search(), this.allCourses());
    this.selectedCategory.set(cat);
  }
  searchFunction(searchinput: string) {
    this.filterCourses(this.selectedCategory(), searchinput, this.allCourses());
    this.search.set(searchinput);
  }

  loadMore() {
    if (this.loading() && !this.hasMore()) return;
    this.loading.set(true);

    let curentPage = this.page();
    try {
      this.getServices.getData().subscribe((res) => {
        const courses = res.internships.slice(curentPage * 8, curentPage * 8 + 8);
        console.log(courses);

        this.allCourses.set([...this.allCourses(), ...courses]);

        this.filterCourses(this.selectedCategory(), this.search(), this.allCourses());

        if (res.courses.length <= curentPage * 8 + 8) {
          this.hasMore.set(false);
        }
      });
      this.page.set(curentPage + 1);
    } catch {
    } finally {
      setTimeout(() => {
        this.loading.set(false);
      }, 200);
    }
  }
}
