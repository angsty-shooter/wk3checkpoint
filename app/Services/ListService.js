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
}

export const listService = new ListService