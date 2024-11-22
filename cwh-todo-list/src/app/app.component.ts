import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // corrected `styleUrls` instead of `styleUrl`
})
export class AppComponent {
  title = 'cwh-todo-list';

  constructor() {
    // setTimeout(() => {
    //   this.title = "Changed title";
    // }, 2000);
  }
}
