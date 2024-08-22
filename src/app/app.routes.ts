import { Routes } from '@angular/router';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { TodoComponent } from './MyComponent/todo/todo.component';

export const routes: Routes = [
    
    {path:"addPath",component: AddTodoComponent},
    {path:"aboutPath",component: AboutComponent},
    {path:"todoPath",component: TodoComponent },
];
