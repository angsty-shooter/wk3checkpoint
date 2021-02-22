import { ProxyState } from "../AppState.js";
import Task from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";


class TaskService{
    constructor() {
     ProxyState.on('taskArr', saveState)
 }
    create(task){
        ProxyState.taskArr = [new Task(task), ...ProxyState.taskArr]
        console.log(ProxyState.taskArr)
    }
    
    delete(taskId) {
        ProxyState.taskArr = ProxyState.taskArr.filter(t=> t.id != taskId)

    }
}

export const taskService = new TaskService()