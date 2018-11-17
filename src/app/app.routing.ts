import { RouterModule, Routes} from '@angular/router';
import { LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CourseGridComponent} from './course-grid/course-grid.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'course', component: CourseGridComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
