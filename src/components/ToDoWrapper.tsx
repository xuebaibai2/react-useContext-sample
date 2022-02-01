import { useEffect } from 'react';
import { API_STATUS } from '../model/apiStatus.model';
import { getToDos } from '../services/todo.service';
import { useAppContext } from '../store/context';
import { AppContextActionTypes } from '../store/context.action';
import ToDoDetails from './ToDo';

const ToDoWrapper = () => {
  const { state, dispatch } = useAppContext();
  useEffect(() => {
    dispatch({ type: AppContextActionTypes.GET_TODOS });
    getToDos().then((res) => {
      dispatch({
        type: AppContextActionTypes.GET_TODOS_COMPLETED,
        payload: res,
      });
    });
  }, []);
  return (
    <div className='todo-wrapper'>
      {state.apiStatus.todo === API_STATUS.LOADING && <span>Loading ...</span>}
      {state.apiStatus.todo === API_STATUS.LOADED &&
        state.todo.length > 0 &&
        state.todo.map((x, idx) => <ToDoDetails {...x} key={idx} />)}
    </div>
  );
};

export default ToDoWrapper;
