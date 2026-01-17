import { Routes } from '@angular/router';
import { EnrollForm } from './enroll-form/enroll-form';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'enroll/:type/:id',
    component: EnrollForm,
  },
];
