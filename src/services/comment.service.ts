import { Comment } from "../model/comment.model";

export const getComments = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments').then<Array<Comment>>(res => res.json());
}
