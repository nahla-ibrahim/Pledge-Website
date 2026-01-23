import { Component, inject, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { allServices } from '../../../services/allServices';
import { categories, CourseType } from '../../../Types';
import { CoursesCard } from '../../shared/courses-card/courses-card';
import { InfinityScroll } from '../../../directive/infinity-scroll';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterAndSearch } from '../../shared/filter-and-search/filter-and-search';

@Component({
  selector: 'app-all-courses',
  imports: [CoursesCard, InfinityScroll, FormsModule, FilterAndSearch],
  templateUrl: './all-courses.html',
  styleUrl: './all-courses.css',
})
export class AllCourses implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {}
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

  ngOnInit(): void {
    console.log(this.allCourses().length);
    console.log(this.page());
  }

  enroll(courseId: string) {
    this.router.navigate(['enroll', 'course', courseId]);
  }

  filterCourses(cat: string, search: string, currentCourses: CourseType[]) {
    console.log(this.allCourses().length);
    console.log(this.page());
    const couress = currentCourses.filter(
      (course) =>
        (course.category == cat || cat == '') &&
        course.title.toLowerCase().includes(search.toLowerCase()),
    );
    // if (couress.length < 8) {
    //   this.loadMore();
    //   console.log(this.filterdCourses());
    // }

    this.filterdCourses.set(couress);
    console.log(this.filterdCourses());
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
        const courses = res.courses.slice(curentPage * 8, curentPage * 8 + 8);
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
