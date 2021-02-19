import { ProxyState } from "../AppState.js";


class TaskService{

    newList(){
        console.log("hello from service")
        document.getElementById('formElement').style.display = 'block';
    }

}

export const taskService = new TaskService