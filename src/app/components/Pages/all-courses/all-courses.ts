import { Component, inject, OnInit, signal } from '@angular/core';
import { allServices } from '../../../services/allServices';
import { categories, CourseType } from '../../../Types';
import { CoursesCard } from '../../shared/courses-card/courses-card';
import { InfinityScroll } from '../../../directive/infinity-scroll';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterAndSearch } from '../../shared/filter-and-search/filter-and-search';

@Component({
  selector: 'app-all-courses',
  imports: [CoursesCard, InfinityScroll, FormsModule, FilterAndSearch],
  templateUrl: './all-courses.html',
  styleUrl: './all-courses.css',
})
export class AllCourses implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  type = signal<'courses' | 'internships' | 'workshops'>('courses');
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
    this.route.paramMap.subscribe((params) => {
      this.type.set(params.get('type') as 'courses' | 'internships' | 'workshops');
      this.resetAndReload();
    });
  }

  enroll(courseId: string) {
    this.router.navigate(['enroll', this.type(), courseId]);
  }

  filterCourses(cat: string, search: string, currentCourses: CourseType[]) {
    const couress = currentCourses.filter(
      (course) =>
        (course.category == cat || cat == '') &&
        course.title.toLowerCase().includes(search.toLowerCase()),
    );

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
        const typeOfCourses = this.type();

        const courses = res[typeOfCourses].slice(curentPage * 8, curentPage * 8 + 8);
        this.allCourses.set([...this.allCourses(), ...courses]);

        this.filterCourses(this.selectedCategory(), this.search(), this.allCourses());

        if (res[typeOfCourses].length <= curentPage * 8 + 8) {
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
  resetAndReload() {
    this.page.set(0);
    this.allCourses.set([]);
    this.hasMore.set(true);
    this.loadMore();
  }
}
