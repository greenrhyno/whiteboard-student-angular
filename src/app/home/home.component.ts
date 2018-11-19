import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ext = 'Whiteboard';

  constructor( // private activatedRoute: ActivatedRoute, private courseService: CourseServiceClient
  ) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe( params => {
    //   this.courseService.findCourseById(params.courseId).then(r => {
    //     if (r.title) {
    //       console.log('FOUND TITLE');
    //       this.ext = r.title;
    //     }});
    //   });
  }

  logout() {
    // this.currentStudent = null;
    // this.ext = '';
    // this.studentService.logout();
  }

}
