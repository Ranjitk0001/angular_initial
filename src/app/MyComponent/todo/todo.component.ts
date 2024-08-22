import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todos:Todo[]=[];

  constructor(){
    this.todos=[
     {
      sno:1,
      title:"This is title",
      descr:"This is descreption",
      active:true,
     },
     {
      sno:2,
      title:"This is title2",
      descr:"This is descreption2",
      active:false,
     },
     {
      sno:3,
      title:"This is title3",
      descr:"This is descreption3",
      active:true,
     },
    ]
  }
  ngOnInit(): void {
      
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
  }
}

