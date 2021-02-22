import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js";


export default class List{
    constructor({title, id = generateId()}) {
        this.title = title
        this.id = id
    }

    get Template() {
        return /*html*/`
        <div class="col-4 border rounded shadow-lg">
            <h1>${this.title}<button class="text-danger close mt-3"
            onclick="app.listController.delete('${this.id}')"><span>&times;</span></button> </h1>
            <h5>Tasks</h5>
            <form onsubmit="app.taskController.create(event, '${this.id}')">
                <div class="form-group">
                    <input type="text" name="title" placeholder="Enter task...">
                    <button type="submit">Add Task</button>
                    <div class="row">
                    ${this.title}
                    </div>
                </div>
            </form>
        </div>
        `
    }
    get Toppings() {
        let template = ''
        let tasks = ProxyState.taskArr.filter(t => t.listId == this.id)
        tasks.forEach(t => template += t.Template)
        return template
    }
}
