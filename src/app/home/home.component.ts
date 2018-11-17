import { Component, OnInit } from '@angular/core';
import {StudentServiceClient} from '../services/StudentServiceClient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentStudent;
  loggedIn = false;
  ext = 'for Students!';

  constructor(private studentService: StudentServiceClient) { }

  ngOnInit() {
    this.currentStudent = this.studentService.getCurrentStudent();
    if (this.currentStudent) {
      this.loggedIn = true;
      if (this.currentStudent.firstName) { this.ext = this.currentStudent.firstName; }
    }
  }

  logout() {
    this.currentStudent = null;
    this.ext = 'for Students!';
    this.studentService.logout();
  }

}
