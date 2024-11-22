import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../Todo';  // Assuming Todo model is imported correctly


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'] // Corrected to styleUrls
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;  // Receiving Todo object as an input
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();  // Emitting Todo object as an output

  constructor() { }

  ngOnInit(): void {
    // Initialization code here
  }
  OnClick(todo: Todo){
    this.todoDelete.emit(this.todo);
    console.log("OnClick has been triggered.")
  }
  onCheckboxClick(todo: Todo){

  }
  
}
