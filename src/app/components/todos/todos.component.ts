import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  inputTodo: string = '';
 
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        content: 'Agrega o edita tus tareas por hacer!',
        completed: false
      }
    ]
  }

  toggleDone(id) {
    this.todos.map((value, index) => {
      if (id == index) {
        value.completed = !value.completed;
        return value;
      }
    })
  } 

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })

    this.inputTodo = "";
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((value, index) => id !== index)
  }

}
