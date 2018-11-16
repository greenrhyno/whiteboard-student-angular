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
import {CourseServiceClient} from './services/CourseServicecClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import {TopicServiceClient} from './services/TopicServiceClient';
import {WidgetServiceClient} from './services/WidgetServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    StudentServiceClient,
    // CourseServiceClient
    // LessonServiceClient,
    // ModuleServiceClient
    // TopicServiceClient,
    // WidgetServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
