import { Routes } from '@angular/router';
import { EnrollForm } from './components/Pages/enroll-form/enroll-form';
import { Home } from './components/Pages/home/home';
import { AllCourses } from './components/Pages/all-courses/all-courses';
import { Allinternship } from './components/Pages/all-internship/all-internship';
import { AllWorkshop } from './components/Pages/all-workshop/all-workshop';

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
  {
    path: 'allinternships',
    component: Allinternship,
  },
  {
    path: 'allworkshops',
    component: AllWorkshop,
  },
];
