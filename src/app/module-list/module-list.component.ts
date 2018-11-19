import {Component, Input, OnInit} from '@angular/core';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  modules;
  courseId;
  activatedModuleId;

  constructor(private modService: ModuleServiceClient,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  activate(id) {
    return id === this.activatedModuleId ? 'nav-pill active' : 'nav-pill';
  }

  selectMod(id) {
    this.router.navigate(['course', this.courseId, 'module', id]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        this.courseId = params.courseId;
        this.activatedModuleId = parseInt(params.modId, 10);
        this.modService.findModulesForCourse(this.courseId).then(mods => {
          this.modules = mods;
          console.log(mods);
        });
    });
  }

}
