import { useEffect } from 'react';
import { API_STATUS } from '../model/apiStatus.model';
import { getComments } from '../services/comment.service';
import { useAppContext } from '../store/context';
import { AppContextActionTypes } from '../store/context.action';
import CommentDetails from './CommentDetails';

const CommentWrapper = () => {
  const { state, dispatch } = useAppContext();
  useEffect(() => {
    dispatch({ type: AppContextActionTypes.GET_COMMENT });
    getComments().then((res) => {
      dispatch({
        type: AppContextActionTypes.GET_COMMENT_COMPLETED,
        payload: res,
      });
    });
  }, []);
  return (
    <div className="comment-wrapper">
      {state.apiStatus.comments === API_STATUS.LOADING && <span>Loading ...</span>}
      {state.apiStatus.comments === API_STATUS.LOADED &&
        state.comments.length > 0 &&
        state.comments.map((x, idx) => <CommentDetails {...x} key={idx} />)}
    </div>
  );
};

export default CommentWrapper;
