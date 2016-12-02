import { Injectable } from '@angular/core';
import  { Single } from './single'
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class DetailService {
  todos = [];
  theSingle : {};
  constructor() { }


  getTodo(id:number){
    let string : string;

    this.todos = JSON.parse(localStorage.getItem('todos'));
     this.todos.forEach(function(todo) {
       if(todo.id == id){
         string = JSON.stringify(todo);
       }
     });
    this.theSingle = JSON.parse(string);
    return this.theSingle;
  }

  updateTodo(id:number, text:string){
    let string : string;
    this.todos = JSON.parse(localStorage.getItem('todos'));
    this.todos.forEach(function(todo) {
      if(todo.id == id){
        todo.text = text;
        string = JSON.stringify(todo);

      }
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.theSingle = JSON.parse(string);
    return this.theSingle;
  }
}

