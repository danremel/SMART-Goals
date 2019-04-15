import { Component, OnInit } from '@angular/core';
import { Goal } from './goal.model';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  goals: Goal[] = [
    new Goal('Test Goal', 'This is the Goal Description', 'April 20, 2019')
  ];

  myStorage = window.localStorage;
  
  constructor() { }
  
  ngOnInit() {
    var savedGoals= this.myStorage.getItem('app-goals');
    this.goals = JSON.parse(savedGoals);
  }
  
  onCreateGoal() {

    this.goals.push({ 
      name: this.name, 
      dueDate: this.dueDate
    });
    this.myStorage.setItem('app-goals', JSON.stringify(this.goals));
    this.name = '', this.dueDate = '';
  }

}
