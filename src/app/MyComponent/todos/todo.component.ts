import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
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
      desc:"This is descreption",
      active:true,
     },
     {
      sno:2,
      title:"This is title2",
      desc:"This is descreption2",
      active:false,
     },
     {
      sno:3,
      title:"This is title3",
      desc:"This is descreption3",
      active:true,
     },
    ]
  }
  ngOnInit(): void {
      
  }

  deleteTodo(tododata:Todo){
    console.log(tododata);
    const index=this.todos.indexOf(tododata);
    this.todos.splice(index,1);
  }
}

