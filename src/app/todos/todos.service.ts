import { Injectable } from '@angular/core';
import { Todos } from './todos'
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class TodosService {

    todos: Todos[] = [];
    newId: number;

    getTodos(): Todos[] {
        if ('localStorage' in window) {
            if (localStorage.getItem('todos') == null) {
                return this.todos;
            } else {
                this.todos = JSON.parse(localStorage.getItem('todos'));
                return this.todos;
            }
        }
    }



    addTodos(todo): Todos[] {
        if ('localStorage' in window) {
            if (localStorage.getItem('todos') == null) {
                this.todos.push({ text: todo, done: false, state: "casual", id:1 });
                localStorage.setItem('todos', JSON.stringify(this.todos))

            } else {
                this.todos = JSON.parse(localStorage.getItem('todos'));

                if (!this.todos.some(x => x.text === todo && todo != "")) {
                  this.newId = this.todos[this.todos.length-1].id + 1;
                    this.todos.push({ text: todo, done: false, state : "casual", id : this.newId})
                }
                localStorage.setItem('todos', JSON.stringify(this.todos))
            }
            return this.todos;
        }
    }

    deleteTodo(index): Todos[] {
        this.todos = JSON.parse(localStorage.getItem('todos'));
        this.todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(this.todos));
        if(this.todos.length == 0){
          localStorage.clear();
        }
        return this.todos;
    }

    validateTodo(index): Todos[] {
        this.todos = JSON.parse(localStorage.getItem('todos'));
        console.log(this.todos[index]);
        this.todos[index].done = !this.todos[index].done;
        localStorage.setItem('todos', JSON.stringify(this.todos));
        return this.todos;
    }



}
