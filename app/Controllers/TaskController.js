import { ProxyState } from "../AppState.js";
import List from "../Models/Task.js";
import { taskService } from "../Services/TaskService.js";


//Private
function _draw() {
    let listsElem = document.getElementById("listLabel")
    let template = ""
    ProxyState.listArr.forEach(pizza => template += pizza.Template)
    listsElem.innerHTML = template
}



//Public
export default class TaskController{

    constructor(){
        ProxyState.on("listArr", _draw)
        _draw()
    }

    newList(){
        taskService.newList()
        console.log("Hello from controller");
    }

    create(event) {
        console.log("create list")
        event.preventDefault()        
            let form = event.target
            let list = {
                title: form.title.value
            }
        taskService.create(list)       
        }
}