import { Component, OnInit } from '@angular/core';
import {TopicServiceClient} from '../services/TopicServiceClient';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  topics = [];
  selectedTopicId;

  lessonId;
  moduleId;
  courseId;

  constructor(private topicService: TopicServiceClient,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  activate(id) {
    return id === this.selectedTopicId ? 'nav-link active' : 'nav-link';
  }

  selectTopic(id) {
    this.router.navigate(['course', this.courseId, 'module', this.moduleId, 'lesson', this.lessonId, 'topic', id]);
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.lessonId) {
        this.lessonId = parseInt(params.lessonId, 10);
        this.topicService.findTopicsForLesson(this.lessonId).then(topics => {
          this.topics = topics;
        });
      }
      this.moduleId = params.modId;
      this.courseId = params.courseId;
      this.selectedTopicId = parseInt(params.topicId, 10);
    });
  }

}
