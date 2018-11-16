import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StudentServiceClient} from '../services/StudentServiceClient';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameFld = '';
  passwordFld = '';

  login(usrnm: string, pswd: string) {
    console.log('Logging in ' + usrnm);
    console.log(this.studentService.findStudentByUsername(usrnm));
    // this.router.navigate(['home']);
  }

  constructor(private router: Router, private studentService: StudentServiceClient) { }

  ngOnInit() {
  }

}
