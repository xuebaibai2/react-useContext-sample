import { ToDo } from "../model/todo.model";

export const getToDos = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos').then<Array<ToDo>>(res => res.json());
}
