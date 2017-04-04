import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, AfterViewInit {
  todos;
  text: string;
  @ViewChild('txtTodo') viewChild;
  appState = 'default';
  oldText;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.text = '';
  }

  addTodo() {
    const newTodo = {
      text : this.text
    };
    this.todos.push(newTodo);
    this.todoService.addTodo(newTodo);
    this.text = '';
  }

  deleteTodo(todoText) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text === todoText) {
        this.todos.splice(i, 1);
        break;
      }
    }
    this.todoService.deleteTodo(todoText);
  }

  editTodo(event, todoText) {
    event.preventDefault();
    this.appState = 'edit';
    this.text = todoText;
    this.viewChild.nativeElement.focus();
    this.oldText = todoText;
  }

  updateTodo() {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text === this.oldText) {
        this.todos[i].text = this.text;
        break;
      }
    }
    this.todoService.updateTodo(this.oldText, this.text);
    this.text = '';
    this.appState = 'default';
    this.viewChild.nativeElement.focus();
  }

  ngAfterViewInit() {
    this.viewChild.nativeElement.focus();
  }
}
