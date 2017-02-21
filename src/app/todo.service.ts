import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable()
export class TodoService extends Init {

  constructor() { 
    super();
    console.log('TodoService is initialized...');
    this.load();
  }

  getTodos() {
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    // Add the new todo
    todos.push(newTodo);
    // Re-Save todos in localStorage 
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(todoText) {
    // Read the todos from localStorage
    var todos = JSON.parse(localStorage.getItem('todos'));
    // loop through and find the matching todoText and remove it from todos
    for(var i=0; i<todos.length;i++) {
      if(todos[i].text == todoText) {
        todos.splice(i, 1);
        break;
      }    
    }
    // Re-save the todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(oldText, newText) {
    // Read the todos from localStorage
    var todos = JSON.parse(localStorage.getItem('todos'));
    // loop through and find the matching todoText and update it with newText
    for(var i=0; i<todos.length;i++) {
      if(todos[i].text == oldText) {
        todos[i].text = newText;
        break;
      }  
    }   
    // Re-save the todos
    localStorage.setItem('todos', JSON.stringify(todos));   
  }
}
