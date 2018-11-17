import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  course;
  selectedMod;
  selectedLesson;
  selectedTopic;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseServiceClient,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      console.log('params id: ' + params.courseId);
      this.courseService.findCourseById(params.courseId).then(r => {
        const foundCourse = r;
        this.course = foundCourse;
        console.log('found: ');
        console.log(foundCourse);
      });
      // this.course = foundCourse;
      // this.selectedMod = (this.course.modules)
    });
  }

  selectMod(id) {
    this.router.navigate(['course', this.course.id, 'module', id]);
  }

}
