import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './Todo/todo.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MyFirstComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
