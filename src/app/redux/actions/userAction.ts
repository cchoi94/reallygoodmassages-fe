import { Dispatch } from 'redux';
import { UserActions, UserReducerState } from 'app/redux/reducers/userReducer';
import axios from 'app/requests/axiosInstance';
import { Thunk } from '../reduxUtils';

interface CognitoUserAttr {
  sub: string;
  name: string;
  email: string;
}

export const getUserInfo: Thunk = (cognitoId: CognitoUserAttr) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    const { data } = await axios.get(`/users/${cognitoId}`);
    dispatch({
      type: UserActions.SET_USER_INFO,
      ...data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createUser: Thunk = (userInfo: CognitoUserAttr) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    const createdUser = await axios.post(`/users`, userInfo);
    dispatch({
      type: UserActions.SET_USER_INFO,
      ...createdUser,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateUserInfo: Thunk = (newUserState: UserReducerState) => async (
  dispatch: Dispatch,
  getState: any
) => {
  const {
    user: { cognitoId },
  } = getState();
  try {
    const updatedUserInfo = await axios.put(`users/${cognitoId}`, newUserState);
    dispatch({
      type: UserActions.SET_USER_INFO,
      ...updatedUserInfo,
    });
  } catch (err) {
    console.log(err);
  }
};
