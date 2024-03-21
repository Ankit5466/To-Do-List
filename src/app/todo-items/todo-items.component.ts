import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {
  @Input() todo: Todo;
  @Input() i: Number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("Delete button clicked")
  }

  onCheckboxClick(todo) {
    this.todoCheckbox.emit(todo);
  }
}
