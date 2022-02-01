import { ToDo } from '../model/todo.model';

const ToDoDetails = (props: ToDo) => (
  <ul>
    <li>UserId: {props.userId}</li>
    <li>ID: {props.id}</li>
    <li>title: {props.title}</li>
    <li>completed: {props.completed ? 'yes' : 'no'}</li>
  </ul>
);

export default ToDoDetails;
