import {Injectable} from '@angular/core';
import {BackEndURL} from './BackEndURL';

@Injectable({
  providedIn: 'root',
})
export class TopicServiceClient {


  findAllTopics() {
    return fetch(BackEndURL.url + 'topic').then(r => r.json());
  }

  findTopicsForLesson(lessonId) {
    return fetch(BackEndURL.url + 'lesson/' + lessonId + '/topic').then(r => r.json());
  }

  findTopicById(topicId) {
    return fetch(BackEndURL.url + 'topic/' + topicId).then(r => r.json());
  }
}
