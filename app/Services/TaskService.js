import { ProxyState } from "../AppState.js";
import List from "../Models/Task.js";


class TaskService{

    newList(){
        console.log("hello from service")
        document.getElementById('formElement').style.display = 'block';
    }
    
    create(list){
        ProxyState.listArr = [new List(list), ...ProxyState.listArr]
    }
}

export const taskService = new TaskService