import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { routing} from './app.routing';
import {StudentServiceClient} from './services/StudentServiceClient';
import {CourseServiceClient} from './services/CourseServiceClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import {TopicServiceClient} from './services/TopicServiceClient';
import {WidgetServiceClient} from './services/WidgetServiceClient';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CourseGridComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    CourseViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    StudentServiceClient,
    CourseServiceClient,
    LessonServiceClient,
    ModuleServiceClient,
    TopicServiceClient,
    WidgetServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
