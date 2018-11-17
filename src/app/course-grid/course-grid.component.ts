import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  courses;

  constructor(private courseService: CourseServiceClient, private router: Router) { }

  ngOnInit() {
    this.courseService.getAllCourses().then(r => this.courses = r);
  }

  routeToViewer(id) {
    console.log('Routing to View Course #' + id);
    this.router.navigate(['course', id]);
  }

}
