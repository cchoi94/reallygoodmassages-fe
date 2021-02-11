import { Dispatch } from 'redux';
import { UserActions } from 'app/redux/reducers/userReducer';
import axios from 'app/requests/axiosInstance';
import { Thunk } from '../reduxUtils';

export const getUserInfo: Thunk = ({
  cognitoId,
}: {
  cognitoId: string;
}) => async (dispatch: Dispatch, getState: any) => {
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

export const getUsersEmail: Thunk = () => async (
  dispatch: Dispatch,
  getState: any
) => {
  const email = await Promise.resolve('testemail@gmail.com');
  try {
    dispatch({
      type: UserActions.GET_USER_EMAIL,
      email,
    });
  } catch (err) {
    console.log(err);
  }
};
