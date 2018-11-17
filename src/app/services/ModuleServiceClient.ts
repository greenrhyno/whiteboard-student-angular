import {Injectable} from '@angular/core';
import {BackEndURL} from './BackEndURL';

@Injectable({
  providedIn: 'root',
})
export class ModuleServiceClient {


  findAllModules() {
    return fetch(BackEndURL.url + 'module').then(r => r.json());
  }

  findModulesForCourse(courseId) {
    return fetch(BackEndURL.url + 'course/' + courseId + '/module').then(r => r.json());
  }

  findModuleById(moduleId) {
    return fetch(BackEndURL.url + 'module/' + moduleId).then(r => r.json());
  }
}
