import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'] // corrected `styleUrls`
})
export class TodosComponent implements OnInit {
  localItem!: string | null ;
  todos: Todo[] = [];

  constructor() {
    // this.localItem = localStorage.getItem('todos');
    // if (this.localItem == null) {
    //   this.todos = [
    //     // { sno: 1, title: 'Learn Angular', desc: 'Understand the basics of Angular framework', active: true },
    //     // { sno: 2, title: 'Build a Todo App', desc: 'Create a simple todo application using Angular', active: true },
    //     // Add more todos as needed
    //   ];
    // } else {
    //   this.todos = JSON.parse(this.localItem);
    // }
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.localItem = localStorage.getItem('todos');
      if (this.localItem === null) {
        this.todos = [
          // Add initial todos here if needed
        ];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    }
  }

  deleteTodo(todo: Todo) {
    console.log('Deleting todo:', todo);
    this.todos = this.todos.filter((t) => t !== todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  todoAdd(todo: Todo) {
    console.log('Adding todo:', todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
