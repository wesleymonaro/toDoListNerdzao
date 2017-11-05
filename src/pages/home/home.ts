import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Task } from '../../models/task';
import { TaskService } from '../../providers/task.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  task: Task = new Task();
  tasks: Task[] = [];

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public taskService: TaskService
  ) {

  }

  ionViewDidLoad(){
    this.taskService.getFromStorage()
      .then((tasks) => {
        if(tasks) this.tasks = JSON.parse(tasks);
      })
  }

  saveTask(){
    if(this.task.name.length < 3){
      this.alertCtrl.create({
        title: "Ops...",
        message: "Título deve ter mais que 3 caracteres",
        buttons: [{
          text: "Foi mal..."
        }]
      }).present();
      return;
    }

    this.tasks.push(this.task);
    this.task = new Task();
    this.taskService.saveInStorage(this.tasks);
  }

  updateTask(task: Task){
    console.log("updateTask");
    
    let i: number = this.tasks.indexOf(task);

    if(i > -1){
      console.log("updateTask: ", i, this.tasks);
      this.tasks[i].status = task.status;
      this.taskService.saveInStorage(this.tasks);
    }
  }

}
