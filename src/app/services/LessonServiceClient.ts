import {Injectable} from '@angular/core';
import {BackEndURL} from './BackEndURL';

@Injectable({
  providedIn: 'root',
})
export class LessonServiceClient {

  findAllLessons() {
    return fetch(BackEndURL.url + 'lesson').then(r => r.json());
  }

  findLessonsForModule(moduleId) {
    return fetch(BackEndURL.url + 'module/' + moduleId + '/lesson').then(r => r.json());
  }

  findLessonById(lessonId) {
    return fetch(BackEndURL.url + 'lesson/' + lessonId).then(r => r.json());
  }
}
