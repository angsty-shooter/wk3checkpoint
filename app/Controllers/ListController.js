import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";
import { loadState } from "../Utils/LocalStorage.js";


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
        ProxyState.on("taskArr", _draw)
        loadState()
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
                title: form.listName.value
            }
            console.log(form.listName.value);
        listService.create(list)
        console.log(list)       
        }

    delete(listId) {
        listService.delete(listId)
    }
}