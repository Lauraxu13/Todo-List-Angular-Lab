import { Component, OnInit } from "@angular/core";
import { animationFrameScheduler } from "rxjs";
import { Todo } from '../todo';

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {

 todoList: Todo[] = [
    { task: "pet cat", completed: false },
    { task: "buy human milk for cat", completed: true },
    { task: "yell at the sun", completed: false },
    { task: "think about doing work", completed: false },
    { task: "Cry", completed:true },
    { task: "I Adore You", completed: false }

  ];

newToDo: Todo ={
  task:"",
  completed: false

};

filterText:string ="";

addToDo(){
this.todoList.push(this.newToDo);
this.newToDo ={
  task:"",
  completed: false
};
}

remove(index:number):void{
  let task =this.todoList[index];
  this.todoList.splice(index,1);
}

 toggleCompleted(index:number):void{
   let done =this.todoList[index];
   done.completed =!done.completed;
 }



 getFilteredTodos() {
   //if there is no filter text return the whole array
  if (!this.filterText.trim()) {
    return this.todoList;
  }
  //if there is filter text- look for filter text, trim - removes extra spaces, lowercase removes case sensitivy
  const match = this.filterText.trim().toLowerCase();
  return this.todoList.filter(todo => 
    todo.task.toLowerCase().includes(match)
  );
}




  constructor() {}

  ngOnInit() {}
}
