import { Comment } from '../model/comment.model';
import { ToDo } from '../model/todo.model';

export enum AppContextActionTypes {
  GET_TODOS = 'get ToDos',
  GET_TODOS_COMPLETED = 'get ToDos Completed',
  GET_COMMENT = 'get Comments',
  GET_COMMENT_COMPLETED = 'get Comments Completed',
}

export type Action =
  | { type: AppContextActionTypes.GET_TODOS }
  | { type: AppContextActionTypes.GET_TODOS_COMPLETED; payload: Array<ToDo> }
  | { type: AppContextActionTypes.GET_COMMENT }
  | { type: AppContextActionTypes.GET_COMMENT_COMPLETED; payload: Array<Comment> };
