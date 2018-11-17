import { Component, OnInit } from '@angular/core';
import {StudentServiceClient} from '../services/StudentServiceClient';
import {Router} from '@angular/router';

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

  constructor(private studentService: StudentServiceClient, private router: Router) { }

  ngOnInit() {
  }

  register(username: string, password: string, firstname: string, lastname: string) {
    console.log( this.studentService.register(username, password, firstname, lastname));
    this.router.navigate(['course']);
  }

}
