
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  sno:number=0;
  title:string="";
  descr:string="";
  
  constructor(){}
  ngOnInit(): void {
      
  }

  onSubmit(){
   const todo={
    sno:this.sno,
    title:this.title,
    descr:this.descr,
    active:true,
   }
   
   this.todoAdd.emit(todo);
   console.log("Insert data");
  }
}
