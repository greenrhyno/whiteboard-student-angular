import {Component, OnInit} from '@angular/core';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  lessons = [];
  selectedLessonId;

  moduleId;
  courseId;

  constructor(private lessonService: LessonServiceClient,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  activate(id) {
    return id === this.selectedLessonId ? 'nav-link active' : 'nav-link';
  }

  selectLesson(id) {
    this.router.navigate(['course', this.courseId, 'module', this.moduleId, 'lesson', id]);
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.modId) {
        this.moduleId = params.modId;
        this.lessonService.findLessonsForModule(params.modId).then(lessons => {
          this.lessons = lessons;
        });
      }
      if (params.lessonId) {
        this.selectedLessonId = parseInt(params.lessonId, 10);
      }
      this.courseId = params.courseId;
    });
  }

}
