import { ProxyState } from "../AppState.js";
import List from "../Models/Task.js";

export function saveState() {
    localStorage.setItem('taskmaster', JSON.stringify({
        lists: ProxyState.listArr,
        // tasks: ProxyState.tasks
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('taskmaster'))
    if (data) {
        ProxyState.listArr = data.pizzas.map(greatList => new List(greatList))
    }
}