import {Injectable} from '@angular/core';
import {BackEndURL} from './BackEndURL';


@Injectable({
  providedIn: 'root',
})
export class CourseServiceClient {
  // courses = [
  //   {id: 1, title: 'Test Course', modules: [{title: 'Mod1'}, {title: 'Mod2'}]},
  //   {id: 2, title: '2 Course'},
  //   {id: 3, title: '3 Course'},
  //   {id: 4, title: '4 Course'},
  //   {id: 5, title: '5 Course'}];


  getAllCourses() {
    return fetch(BackEndURL.url + 'course/all').then (r => r.json());
  }

  findCourseById(id) {
    id = parseInt(id, 10);
    // return this.courses.find(c => c.id === id);
    return fetch(BackEndURL.url + 'course/' + id).then( r => r.json());
  }
}
