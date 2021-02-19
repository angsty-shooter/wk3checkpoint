import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TaskService.js";


//Private
function _draw() {

}



//Public
export default class TaskController{

    constructor(){
        _draw()
    }

    newList(){
        taskService.newList()
        console.log("Hello from controller");
    }
}