import React from 'react';
import { useAuth } from './useAuth';
import { Redirect } from 'react-router';
import { Path } from 'app/Path';
import { Signin } from 'app/components/auth/components/signin/signin';

// const redirectToAuthStage = (authStage: string) => {
//   switch (authStage) {
//     case Path.SIGNIN:
//       return <Redirect to={Path.SIGNIN} />;
//     case Path.SIGNUP:
//       return <Redirect to={Path.SIGNUP} />;
//     case Path.SIGNOUT:
//       return <Redirect to={Path.SIGNOUT} />;
//     case Path.CONFIRMSIGNUP:
//       return <Redirect to={Path.CONFIRMSIGNUP} />;
//     default:
//       return <Redirect to={Path.SIGNIN} />;
//   }
// };

export const Auth: React.FC = () => {
  const { user, authStage } = useAuth();
  return (
    <>
      {user ? (
        <>
          <Redirect to={Path.HOME} />
          {setTimeout(() => window.location.reload(), 100)}
        </>
      ) : (
        // redirectToAuthStage(authStage)
        <Signin />
      )}
    </>
  );
};
