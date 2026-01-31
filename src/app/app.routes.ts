import { Routes } from '@angular/router';
import { Home } from './components/Pages/home/home';
import { NotFound } from './components/Pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'enroll/:type/:id',
    loadComponent: () =>
      import('./components/Pages/enroll-form/enroll-form').then((m) => m.EnrollForm),
  },
  {
    path: 'all/:type',
    loadComponent: () =>
      import('./components/Pages/all-courses/all-courses').then((m) => m.AllCourses),
  },
  {
    path: 'about',
    loadComponent: () => import('./components/Pages/about/about').then((m) => m.About),
  },
  {
    path: 'contactus',
    loadComponent: () =>
      import('./components/Pages/contact-us/contact-us').then((m) => m.ContactUs),
  },
  {
    path: 'allinstructors',
    loadComponent: () =>
      import('./components/Pages/all-instructors/all-instructors').then((m) => m.AllInstructors),
  },
  {
    path: 'instructorCourses/:id',
    loadComponent: () =>
      import('./components/Pages/instructor-profile/instructor-profile').then(
        (m) => m.InstructorProfile,
      ),
  },

  {
    path: '**',
    component: NotFound,
  },
];
