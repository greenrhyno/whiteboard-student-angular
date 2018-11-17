import {Injectable} from '@angular/core';
import {BackEndURL} from './BackEndURL';

@Injectable({
  providedIn: 'root',
})
export class WidgetServiceClient {


  findAllWidgets() {
    return fetch(BackEndURL.url + 'widget').then(r => r.json());
  }

  findWidgetsForTopic(topicId) {
    return fetch(BackEndURL.url + 'topic/' + topicId + '/widget').then(r => r.json());
  }

  findWidgetById(widgetId) {
    return fetch(BackEndURL.url + 'widget/' + widgetId).then(r => r.json());
  }
}
