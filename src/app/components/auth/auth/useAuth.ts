import { Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFormValues } from 'app/utils/getFormValues';
import { Path } from 'app/Path';
import { useQuery } from 'app/utils/useQuery';
// import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
// import { Hub } from 'aws-amplify';

interface Confirmation {
  username: string;
  code: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<object | undefined>();
  const { authStage } = useParams();
  const history = useHistory();
  const query = useQuery();
  let [resendCooldown, setResendCooldown] = useState<number>(0);

  useEffect(() => {
    (async function() {
      await getUser();
    })();
  }, []);

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

  const getUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  };

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
    const { email, code } = getFormValues(event.target);
    console.log(email, code);
    // try {
    //   await Auth.confirmSignUp(email, code);
    // } catch (error) {
    //   console.log('error confirming sign up', error);
    // }
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
      }
      console.log('error signing in', error);
    }
  };

  const resendConfirmationCode = async (username: string) => {
    try {
      // await Auth.resendSignUp(username);
      handleResendCoolDown(3);
      console.log('code resent successfully');
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
