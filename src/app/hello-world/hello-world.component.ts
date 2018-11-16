import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  objects = ['enemy', 'friend', 'mentor', 'brother', 'boy'];
  noun = 'default';

  msg = {person: 'old enemy'};

  constructor() { }

  addNoun(noun) {
    this.objects.push(noun);
  }

  ngOnInit() {
  }

}
