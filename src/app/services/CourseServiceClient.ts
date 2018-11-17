import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CourseServiceClient {
  courses = [{id: 1, title: 'Test Course'},
    {id: 2, title: '2 Course'},
    {id: 3, title: '3 Course'},
    {id: 4, title: '4 Course'},
    {id: 5, title: '5 Course'}];

  getAllCourses() {
    return this.courses;
  }

  findCourseById(id) {
    this.courses.find(c => c.id === id);
  }
}
