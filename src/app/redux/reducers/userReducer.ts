import {
  createReducer,
  handleSimpleReducerUpdates,
  ReducerDictionary,
} from 'app/redux/reduxUtils';

export enum UserActions {
  GET_USER_INFO = 'GET_USER_INFO',
  SET_USER_INFO = 'SET_USER_INFO',
  UPDATE_USER_INFO = 'UPDATE_USER_INFO',
}

export interface UserReducerState {
  id: string;
  cognitoId: string;
  email: string;
  username: string;
  favoriteMassages: [];
}
export const userInitialState: UserReducerState = {
  id: '',
  cognitoId: '',
  email: '',
  username: '',
  favoriteMassages: [],
};

const reducers: ReducerDictionary<UserReducerState> = {
  ...handleSimpleReducerUpdates([
    UserActions.GET_USER_INFO,
    UserActions.SET_USER_INFO,
  ]),
};
export const userReducer = createReducer<UserReducerState>(
  userInitialState,
  reducers
);
