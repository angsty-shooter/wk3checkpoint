  
import { taskService } from "../Services/TaskService.js";
import { ProxyState } from "../AppState.js";

export default class TaskController{

    constructor() {
    }

    create(event, pizzaId) {
    event.preventDefault()        
        let form = event.target
        let  = {
            title: form.title.value,
            Id: Id
        }
    taskService.create()       
    }

    delete(taskId) {
        taskService.delete(taskId)
    }
}