import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoComponent } from './MyComponent/todo/todo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
       RouterLink,
    TodoComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_initial';
  constructor(){
    // setTimeout(()=>{
    //      this.title="Project In Angular";
    // },2000);
}
}