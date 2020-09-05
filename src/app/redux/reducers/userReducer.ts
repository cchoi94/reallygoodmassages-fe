import { UserActions } from '../actions/userAction';

export default (state = {}, action: { type: any; payload: any }) => {
  switch (action.type) {
    case UserActions.SET_USER_INFO:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
