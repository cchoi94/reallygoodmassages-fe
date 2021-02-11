import { combineReducers } from 'redux';
import {
  UserReducerState,
  userInitialState,
  userReducer,
} from './reducers/userReducer';

export interface RootState {
  user: UserReducerState;
}

export const initialState: RootState = {
  user: userInitialState,
};

export const rootReducer = combineReducers<RootState>({
  user: userReducer,
});
