import React from 'react';
import { Path } from 'app/Path';
import { useAuth } from '../auth/useAuth';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import cls from './authWrapper.module.scss';

interface OwnProps {
  wasSigninClicked?: (arg: boolean) => void;
}

export const AuthWrapper: React.FC<OwnProps> = ({
  wasSigninClicked,
  children,
}) => {
  const { user, signOut } = useAuth();
  return user ? (
    <>
      {children}
      <button
        onClick={signOut}
        className={classNames('btn btn-primary', cls.signOut)}
      >
        SIGN OUT
      </button>
    </>
  ) : (
    <Link
      onClick={wasSigninClicked ? () => wasSigninClicked(false) : () => {}}
      to={Path.SIGNIN}
      className={classNames('btn btn-primary')}
    >
      Sign In
    </Link>
  );
};
