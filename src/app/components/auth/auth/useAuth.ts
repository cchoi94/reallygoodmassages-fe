import { Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFormValues } from 'app/utils/getFormValues';
import { Path } from 'app/Path';
// import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
// import { Hub } from 'aws-amplify';

interface Signup {
  email: string;
  password: string;
  name: string;
}

interface Confirmation {
  username: string;
  code: string;
}

interface Signin {
  username: string;
  password: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<object | undefined>();
  const { authStage } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async function() {
      await getUser();
    })();
  }, []);

  const getUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
    setUser(user);
  };

  const signUp = async ({ email, password, name }: Signup) => {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          name,
        },
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  const confirmSignUp = async ({ username, code }: Confirmation) => {
    try {
      await Auth.confirmSignUp(username, code);
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
      console.log('error signing in', error);
    }
  };

  const resendConfirmationCode = async (username: string) => {
    try {
      await Auth.resendSignUp(username);
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
  };
};
