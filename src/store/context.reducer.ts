import { API_STATUS } from "../model/apiStatus.model"
import { Action, AppContextActionTypes } from "./context.action"
import { IAppState } from "./state"

const AppReducer = (state: IAppState, action: Action): IAppState => {
    switch (action.type) {
        case AppContextActionTypes.GET_TODOS: {
            return {
                ...state,
                apiStatus: {
                    ...state.apiStatus,
                    todo: API_STATUS.LOADING
                }
            }
        }

        case AppContextActionTypes.GET_TODOS_COMPLETED: {
            return {
                ...state,
                todo: action.payload,
                apiStatus: {
                    ...state.apiStatus,
                    todo: API_STATUS.LOADED
                }
            }
        }

        case AppContextActionTypes.GET_COMMENT: {
            return {
                ...state,
                apiStatus: {
                    ...state.apiStatus,
                    comments: API_STATUS.LOADING
                }
            }
        }

        case AppContextActionTypes.GET_COMMENT_COMPLETED: {
            return {
                ...state,
                comments: action.payload,
                apiStatus: {
                    ...state.apiStatus,
                    comments: API_STATUS.LOADED
                }
            }
        }

        default: {
            return state;
        }
    }
}

export default AppReducer;