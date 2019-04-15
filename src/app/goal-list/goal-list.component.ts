import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {
  goalName: string = '';
  goalDate: string = '';

  goals = [];

  myStorage = window.localStorage;
  
  constructor() { }
  
  ngOnInit() {
    var savedGoals= this.myStorage.getItem('app-goals');
    this.goals = JSON.parse(savedGoals);
  }
  
  onCreateGoal() {
    this.goals.push({ goalName: this.goalName, goalDate: this.goalDate});
    this.myStorage.setItem('app-goals', JSON.stringify(this.goals))
    this.goalName = '', this.goalDate = '';
  }
}
