import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalAddComponent } from './goal-list/goal-add/goal-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoalListComponent,
    GoalAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
