import { Component } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})

export class TodosComponent {
  localItem: string;
  todos: Todo[];

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  deleteTodo(todo:Todo) {
    console.log(todo)
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo:Todo) {
    console.log(todo);
    if (todo.title.trim() !== "" && todo.desc.trim() !== "") {
      this.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  toggleTodo(todo:Todo) {
    let index = this.todos.indexOf(todo);
    this.todos[index].status = !this.todos[index].status;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
