  
import { taskService } from "../Services/TaskService.js";
import { ProxyState } from "../AppState.js";

export default class TaskController{

    constructor() {
    }

    create(event, pizzaId) {
    event.preventDefault()        
        let form = event.target
        let rawTopping = {
            title: form.title.value,
            pizzaId: pizzaId
        }
    taskService.create(rawTopping)       
    }

    delete(taskId) {
        taskService.delete(taskId)
    }
}