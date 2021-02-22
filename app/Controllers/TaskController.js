  
import { taskService } from "../Services/TaskService.js";
import { ProxyState } from "../AppState.js";

export default class TaskController{

    constructor() {
    }

    create(event, listId) {
    event.preventDefault()        
        let form = event.target
        let task = {
            title: form.title.value,
            listId: listId
        }
    taskService.create(newTask)       
    }

    delete(taskId) {
        taskService.delete(taskId)
    }
}