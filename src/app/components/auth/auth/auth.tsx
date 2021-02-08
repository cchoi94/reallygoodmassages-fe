import React from 'react';
import { useAuth } from './useAuth';
import { Redirect } from 'react-router';
import { Path } from 'app/Path';
import { Signin } from 'app/components/auth/components/signin/signin';

export const Auth: React.FC = () => {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <>
          <Redirect to={Path.HOME} />
          {setTimeout(() => window.location.reload(), 100)}
        </>
      ) : (
        <Signin />
      )}
    </>
  );
};
