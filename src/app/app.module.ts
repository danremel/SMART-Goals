import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalAddComponent } from './goal-list/goal-add/goal-add.component';
import { GoalComponent } from './goal-list/goal/goal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoalListComponent,
    GoalAddComponent,
    GoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
