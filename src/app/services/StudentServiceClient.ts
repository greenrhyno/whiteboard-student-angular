import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceClient {

  students = [
    {id: 1, username: 'ryan'},
    {id: 2, username: 'drmoney'},
    {id: 3, username: 'candy'},
  ];

  findStudentByUsername(username: string) {
    return this.students.find( usr => usr.username === username);
  }


}
