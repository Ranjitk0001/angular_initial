import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports:[],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{

  @Input() tododata!:Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(){

  }

  ngOnInit(): void {
      
  }

  onClick(tododata:Todo  ){
    this.todoDelete.emit(tododata);
    console.log("OnClick has trigger")
   
  }
}
