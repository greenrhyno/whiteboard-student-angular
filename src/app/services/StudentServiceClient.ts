import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceClient {

  id = 4;

  students = [
    {id: 1, username: 'ryan'},
    {id: 2, username: 'drmoney'},
    {id: 3, username: 'candy'},
  ];

  findStudentByUsername(username: string) {
    return this.students.find( usr => usr.username === username);
  }

  register(username: string, password: string, first: string, last: string) {
    const newStudent = {id: this.id, username: username};
    this.students.push(newStudent);
    this.id++;
    return newStudent;
  }

}
