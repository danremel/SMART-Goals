import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  @Output() exampleOutput = new EventEmitter();

  goal = {
    goalName: 'Testing1',
    goalDate: Date.now()
  }

  exampleMethodChild() {
    this.exampleOutput.emit(this.goal.goalName);
  }
  constructor() { }

  ngOnInit() {
  }

}
