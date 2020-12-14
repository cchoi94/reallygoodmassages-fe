import React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import classNames from 'classnames';
import { useSubscribe } from './useSubscribe';

import cls from './subscribe.module.scss';

interface OwnProps {
  buttonContent?: JSX.Element;
  border?: boolean;
  onSuccess?: () => void;
}

export const Subscribe: React.FC<OwnProps> = ({
  buttonContent = <p className={cls.defaultBtnContent}>Yes, Sign me up.</p>,
  border = false,
  onSuccess,
}) => {
  const {
    email,
    setEmail,
    error,
    isLoading,
    onSubmit,
    isSuccess,
  } = useSubscribe({
    onSuccess,
  });

  return (
    <div className={cls.wrapper}>
      <form onSubmit={onSubmit} className={cls.subscribeForm}>
        <input
          type='email'
          name='email'
          id='bd-email'
          placeholder='Enter your email address'
          className={cls.subscribeEmailInput}
          onChange={event => setEmail(event.target.value)}
        ></input>
        <input type='hidden' value='1' name='embed'></input>
        <Button
          disabled={email === ''}
          type='submit'
          className={classNames(cls.subscribeBtn, { [cls.border]: border })}
          block={false}
        >
          {isLoading}
          {isLoading ? (
            <Spinner animation='border' size='sm' variant='light' />
          ) : (
            buttonContent
          )}
        </Button>
      </form>
      <p className={cls.errMessage}>{error}</p>
      {isSuccess ? (
        <p className={cls.successMessage}>
          <span role='img' aria-label='email emoji'>
            💌
          </span>
          Thanks for subscribing
        </p>
      ) : null}
    </div>
  );
};
