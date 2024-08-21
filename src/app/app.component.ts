import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from "./my-component/my-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponentComponent],
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