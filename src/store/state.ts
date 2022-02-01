import { API_STATUS } from "../model/apiStatus.model";
import { Comment } from "../model/comment.model";
import { ToDo } from "../model/todo.model";

export interface IAppState {
    todo: Array<ToDo>,
    comments: Array<Comment>,
    apiStatus: {
        todo: API_STATUS,
        comments: API_STATUS,
    }
};

export const InitialAppState: IAppState = {
    todo: [],
    comments: [],
    apiStatus: {
        todo: API_STATUS.NOT_LOAD,
        comments: API_STATUS.NOT_LOAD
    }
};
