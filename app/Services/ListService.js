import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";


class ListService{

    newList(){
        console.log("hello from service")
        document.getElementById('formElement').style.display = 'block';
    }
    
    create(list){
        ProxyState.listArr = [new List(list), ...ProxyState.listArr]
    }
    delete(listId) {
        // let temp = ProxyState.pizzas
        // let pizzaIndex = temp.findIndex(p => p.id == pizzaId)
        // temp.splice(pizzaIndex, 1)
        // ProxyState.pizzas = temp
        ProxyState.listArr = ProxyState.listArr.filter(l=> l.id != listId)
        ProxyState.taskArr = ProxyState.task.filter(t=> t.listId != taskId)
}
}
export const listService = new ListService