import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { Task } from "../models/task";

@Injectable()
export class TaskService {

    constructor(
        public storage: Storage
    ) { }


    saveInStorage(tasks: Task[]){
        this.storage.set('tasks', JSON.stringify(tasks))
            .then(()=> console.log("Salvo no storage"))
    }

    getFromStorage(){
        return Promise.resolve(this.storage.get('tasks'));
    }

}