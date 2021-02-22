import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";


//Private
function _draw() {
    let listsElem = document.getElementById("listLabel")
    let template = ""
    ProxyState.listArr.forEach(list => template += list.Template)
    listsElem.innerHTML = template
}



//Public
export default class ListController{

    constructor(){
        ProxyState.on("listArr", _draw)
        _draw()
    }

    newList(){
        listService.newList()
        console.log("Hello from controller");
    }

    create(event) {
        console.log("create list")
        event.preventDefault()        
            let form = event.target
            let list = {
                title: form.title.value
            }
        listService.create(list)       
        }
}