import produce from 'immer';

import {
  createReducer,
  handleSimpleReducerUpdates,
  ReducerDictionary,
} from 'app/redux/reduxUtils';

export enum UserActions {
  GET_USER_INFO = 'GET_USER_INFO',
  SET_USER_INFO = 'SET_USER_INFO',
  GET_USER_EMAIL = 'GET_USER_EMAIL',
}

export interface UserReducerState {
  id: string;
  email: string;
  username: string;
  favoriteMassages: string[];
}
export const userInitialState: UserReducerState = {
  id: '',
  email: '',
  username: '',
  favoriteMassages: [],
};

const reducers: ReducerDictionary<UserReducerState> = {
  ...handleSimpleReducerUpdates([
    UserActions.GET_USER_INFO,
    UserActions.SET_USER_INFO,
  ]),
  [UserActions.GET_USER_EMAIL]: (state, { email }) =>
    produce(state, draftState => {
      draftState.email = email;
    }),
};
export const userReducer = createReducer<UserReducerState>(
  userInitialState,
  reducers
);
