import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js"

export function saveState() {
    localStorage.setItem('taskmaster', JSON.stringify({
        lists: ProxyState.listArr,
        tasks: ProxyState.taskArr
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('taskmaster'))
    if (data) {
        ProxyState.listArr = data.lists.map(greatList => new List(greatList))
        ProxyState.taskArr = data.tasks.map(greatList => new Task(greatList))
    }
}