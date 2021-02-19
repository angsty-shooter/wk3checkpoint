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
                    <h1>${this.title}<button class="text-danger close mt-3" onclick="app.pizzaController.delete('${this.id}')"><span>&times;</span></button> </h1>
                </div>
}