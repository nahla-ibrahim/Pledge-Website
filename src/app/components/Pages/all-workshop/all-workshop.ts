import { Component, inject, signal } from '@angular/core';
import { categories, CourseType } from '../../../Types';
import { Router } from '@angular/router';
import { allServices } from '../../../services/allServices';
import { CoursesCard } from '../../shared/courses-card/courses-card';
import { FilterAndSearch } from '../../shared/filter-and-search/filter-and-search';
import { FormsModule } from '@angular/forms';
import { InfinityScroll } from '../../../directive/infinity-scroll';

@Component({
  selector: 'app-all-workshop',
  imports: [CoursesCard, FilterAndSearch, FormsModule, InfinityScroll],
  templateUrl: './all-workshop.html',
  styleUrl: './all-workshop.css',
})
export class AllWorkshop {
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
    this.router.navigate(['enroll', 'workshop', courseId]);
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
    console.log(this.loading);

    if (this.loading() && !this.hasMore()) return;
    this.loading.set(true);

    let curentPage = this.page();
    try {
      this.getServices.getData().subscribe((res) => {
        const courses = res.workshops.slice(curentPage * 8, curentPage * 8 + 8);
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
