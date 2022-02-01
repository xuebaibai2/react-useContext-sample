import './App.css';
import CommentWrapper from './components/CommentWrapper';
import ToDoWrapper from './components/ToDoWrapper';
import { AppContextProvider } from './store/context';

const App = () => {
  return (
    <AppContextProvider className="app">
      <div className="app">
        <ToDoWrapper></ToDoWrapper>
        <CommentWrapper></CommentWrapper>
      </div>
    </AppContextProvider>
  );
};

export default App;
