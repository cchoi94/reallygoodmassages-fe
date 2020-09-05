import { Dispatch } from 'redux';
import axios from '../../requests/axiosInstance';

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
