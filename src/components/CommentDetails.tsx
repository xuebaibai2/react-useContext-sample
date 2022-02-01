import { Comment } from '../model/comment.model';

const CommentDetails = (props: Comment) => (
  <ol>
    <li>postID: {props.postId}</li>
    <li>id: {props.id}</li>
    <li>name: {props.name}</li>
    <li>email: {props.email}</li>
    <li>body: {props.body}</li>
  </ol>
);

export default CommentDetails;
