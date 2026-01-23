import { Routes } from '@angular/router';
import { EnrollForm } from './components/Pages/enroll-form/enroll-form';
import { Home } from './components/Pages/home/home';
import { AllCourses } from './components/Pages/all-courses/all-courses';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'enroll/:type/:id',
    component: EnrollForm,
  },
  {
    path: 'allcourses',
    component: AllCourses,
  },
];
