import { Component } from '@angular/core';
import { TodoItems } from "../app/models/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
  todoList: TodoItems[] = [];
  description: string = 'Checklist';

  getItems() {
    return this.todoList;
  }

  getName() {
    return this.description;
  }

  addItem(value:string) {
    if (value !== "") {
      const item = {
        todo: value,
        status: false
      }
      this.todoList.push(item);
    } else {
      this.showAlert("Can't be empty.");
    }
  }

  showAlert(alert: string) {
    return alert;
  }
}
