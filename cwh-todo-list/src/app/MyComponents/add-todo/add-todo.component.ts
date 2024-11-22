import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Todo} from '../../../Todo'

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'] // Corrected from styleUrl to styleUrls
})
export class AddTodoComponent implements OnInit {
  title: string = ''; // Initialized to avoid undefined errors
  desc: string = '';
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();  
  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    console.log('Form submitted');
    const todo = {
      sno: 8,
      title: this.title, // Corrected to use : instead of =
      desc: this.desc,
      active: true
    };
    this.todoAdd.emit(todo);
    console.log(todo);
  }
}

