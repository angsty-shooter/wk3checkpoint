import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TaskService";

//Private

function _draw() {
 

}



//Public

export default class TaskController{

    constructor(){
        _draw()
    }

    newList(){
        console.log("Hello from controller")
        taskService.newList()
    }
}