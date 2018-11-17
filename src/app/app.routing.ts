import { RouterModule, Routes} from '@angular/router';
import { LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'course', component: CourseGridComponent},
  { path: 'course/:courseId', component: CourseViewerComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
