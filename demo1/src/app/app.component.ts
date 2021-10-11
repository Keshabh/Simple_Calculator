import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  counter= -5;
  languages=['C','C++','Python','Java']
  incrementor()
  {
    this.counter+=1;
  }
  decrementor()
  {
    this.counter-=1;
  }
}
