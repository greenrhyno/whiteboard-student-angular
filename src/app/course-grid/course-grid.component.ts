import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {StudentServiceClient} from '../services/StudentServiceClient';
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
    this.courses = this.courseService.getAllCourses();
  }

}
