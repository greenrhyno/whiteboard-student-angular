import { Component, OnInit } from '@angular/core';
import {WidgetServiceClient} from '../services/WidgetServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  topicId;
  widgets = [];

  constructor(private widgetService: WidgetServiceClient,
            private activatedRoute: ActivatedRoute) { }

  splitString(str: string) {
    // console.log('SPLITTING STRING');
    return str.split('\n');
  };

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.topicId = parseInt(params.topicId, 10);
      console.log('FETCHING WIDGETS');
      this.widgetService.findWidgetsForTopic(this.topicId).then(r => {
        console.log('widgets found');
        console.log(r);
        this.widgets = r;
      });
    });
  }

}
