import { createContext, useContext, useReducer } from 'react';
import { Action } from './context.action';
import AppReducer from './context.reducer';
import { IAppState, InitialAppState } from './state';

type Dispatch = (action: Action) => void;

const AppContext = createContext<{state: IAppState; dispatch: Dispatch} | undefined>(undefined);

const AppContextProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(AppReducer, InitialAppState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};

export { AppContextProvider, useAppContext };
