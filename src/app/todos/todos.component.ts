import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Todos } from './todos';
import {TodosService} from './todos.service'



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers : [TodosService]
})
export class TodosComponent implements OnInit {


  todos: Todos[];
  text = "";

constructor(private todosService: TodosService) { }

    ngOnInit() {
      this.todos = this.todosService.getTodos();
   }

 addTodo(){
   this.todos = this.todosService.addTodos(this.text);
   this.text = ""
}

 deleteTodo(index){
  this.todos = this.todosService.deleteTodo(index);
}

validateTodo(index){
  this.todos = this.todosService.validateTodo(index);
}



}
