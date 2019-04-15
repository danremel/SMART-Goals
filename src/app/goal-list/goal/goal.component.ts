import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goalName: string = '';
  goalDate: string = '';

  editing: boolean = false;
  lifeCheck: string = "I'm Here!";
  constructor() { }

  ngOnInit() {
  }

  onSelectGoal() {
    if(!this.editing) {
      this.editing = true;
    }
  }

  onSaveGoal(index) {
    if(this.editing) {
      this.editing = false;
    }
  }

  onCancelEdit() {
    if(this.editing) {
      this.editing = false;
      this.goalName = '';
      this.goalDate = '';
    }
  }

  onRemoveGoal(index) {
  }
}
