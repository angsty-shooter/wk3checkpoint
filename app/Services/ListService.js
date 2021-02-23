import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListService{

    constructor() {
        ProxyState.on('listArr', saveState)
    }

    newList(){
        console.log("hello from service")
        document.getElementById('formElement').style.display = 'block';
    }
    
    create(list){
        ProxyState.listArr = [new List(list), ...ProxyState.listArr]
    }
    delete(listId) {
        let r = confirm("Are you sure you want to delete?")
        if (r == true){
            ProxyState.listArr = ProxyState.listArr.filter(l=> l.id != listId)
            ProxyState.taskArr = ProxyState.taskArr.filter(t=> t.listId != listId)
        }
        else{
            console.log("Cancel")
        }
    }
}
export const listService = new ListService