import { Auth } from 'aws-amplify';
import { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFormValues } from 'app/utils/getFormValues';
import { Path } from 'app/Path';
import { useQuery } from 'app/utils/useQuery';
import { toast } from 'react-toastify';
import { getUserInfo } from 'app/redux/actions/userAction';
import { useDispatch } from 'react-redux';

export const getToken = async () => {
  const tokens = await Auth.currentSession();
  return tokens.getIdToken().getJwtToken();
};

export const useAuth = () => {
  const [user, setUser] = useState<object | undefined>();
  const { authStage } = useParams();
  const history = useHistory();
  const query = useQuery();
  const dispatch = useDispatch();
  let [resendCooldown, setResendCooldown] = useState<number>(0);

  const getUser = useCallback(async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      dispatch(getUserInfo({ cognitoId: user.username }));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    (async function() {
      await getUser();
    })();
  }, [getUser]);

  const signUp = async (event: any) => {
    event.preventDefault();
    const { name, email, password } = getFormValues(event.target);
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          name,
        },
      });
      setUser(user);
      history.push(Path.CONFIRMSIGNUP);
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  const confirmSignUp = async (event: any) => {
    event.preventDefault();
    const { email, code } = getFormValues(event.target);
    try {
      await Auth.confirmSignUp(email, code);
      toast.success('👍 Email Confirmed, begin by logging in!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push(Path.SIGNIN);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  };

  const signIn = async (event: any) => {
    event.preventDefault();
    const { email, password } = getFormValues(event.target);
    try {
      const user = await Auth.signIn(email, password);
      setUser(user);
      history.push(Path.HOME);
      setTimeout(() => window.location.reload(), 100);
    } catch (error) {
      if (error.code === 'UserNotConfirmedException') {
        history.push(`${Path.CONFIRMSIGNUP}?email=${email}`);
        toast.info('✉️ Please confirm your email', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      if (error.code === 'UserNotFoundException') {
        toast.error('😐 There is no account for this email', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      console.log('error signing in', error);
    }
  };

  const resendConfirmationCode = async (username: string) => {
    try {
      await Auth.resendSignUp(username);
      handleResendCoolDown(60);
      toast.success('✉️ Verification has been code sent!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log('error resending code: ', err);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUser(undefined);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  const handleResendCoolDown = (seconds: number) => {
    resendCooldown = seconds;
    setInterval(() => {
      if (resendCooldown < 0) {
        clearInterval();
        return;
      }
      setResendCooldown(resendCooldown--);
    }, 1000);
  };

  return {
    user,
    signUp,
    signIn,
    signOut,
    confirmSignUp,
    resendConfirmationCode,
    authStage,
    query,
    resendCooldown,
  };
};
