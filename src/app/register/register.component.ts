import { Component, OnInit } from '@angular/core';
import {StudentServiceClient} from '../services/StudentServiceClient';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usernameFld = '';
  passwordFld = '';
  lastNameFld = '';
  firstNameFld = '';

  constructor(private studentService: StudentServiceClient) { }

  ngOnInit() {
  }

  register(username: string, password: string, firstname: string, lastname: string) {
    console.log( this.studentService.register(username, password, firstname, lastname));
  }

}
