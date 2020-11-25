import { Dispatch } from 'redux';

export enum UserActions {
  GET_USER_INFO = 'GET_USER_INFO',
  SET_USER_INFO = 'SET_USER_INFO',
}

export const setUsersState = () => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: UserActions.SET_USER_INFO,
      payload: { name: 'Boiler User' },
    });
  } catch (err) {}
};
