import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceClient {

  currentStudent = {};

  id = 4;

  students = [
    {id: 1, username: 'ryan', password: 'ryan', firstName: 'Ryan', lastName: 'Green'},
    {id: 2, username: 'drmoney', password: 'drmoney', firstName: 'Dr Fancy', lastName: 'Money'},
    {id: 3, username: 'candy', password: 'candy', firstName: ' Candy', lastName: 'MD'},
  ];

  getCurrentStudent() {
    return this.currentStudent;
  }

  findStudentByUsername(username: string) {
    return this.students.find( usr => usr.username === username);
  }

  findStudentByCreds(username: string, password: string) {
    this.currentStudent =  this.students.find( usr => ((usr.username === username) && (usr.password === password)));
    return this.currentStudent;
  }

  login(username: string, password: string) {

  }

  register(username: string, password: string, first: string, last: string) {
    const newStudent = {id: this.id, username: username, password: password, firstName: first, lastName: last};
    this.students.push(newStudent);
    this.id++;
    return newStudent;
  }

  logout() {
    console.log('LOGOUT');
  }
}
