import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from 'app/assets/images/icons/logo.svg';
import { useAuth } from '../../auth/useAuth';
import classNames from 'classnames';

import cls from '../commons.module.scss';

export const ConfirmSignup: React.FC = () => {
  const {
    confirmSignUp,
    resendConfirmationCode,
    resendCooldown,
    query,
  } = useAuth();
  const getEmailQuery = (query: any) => {
    const formattedEmail = query.get('email');
    return formattedEmail ? formattedEmail.split(' ').join('+') : '';
  };

  return (
    <Form className={cls.container} onSubmit={confirmSignUp}>
      <div className={cls.header}>
        <img src={Logo} alt={'really good massages logo'} />
        <p className={cls.title}>Confirm Signup</p>
      </div>
      <div className={cls.formSection}>
        <p>A verification code has been sent to your email!</p>
      </div>

      <Form.Group controlId='formBasicEmail'>
        <Form.Control
          required
          type='email'
          placeholder='Email'
          name='email'
          value={getEmailQuery(query)}
        />
      </Form.Group>

      <Form.Group controlId='formBasicCode'>
        <Form.Control
          required
          type='text'
          placeholder='Verification Code'
          name='code'
        />
      </Form.Group>

      <Button
        variant='primary'
        type='submit'
        className={classNames(cls.submitBtn)}
      >
        Submit
      </Button>
      <div className={cls.resendCodeContainer}>
        <Button
          variant='link'
          disabled={resendCooldown !== 0}
          onClick={() => resendConfirmationCode(getEmailQuery(query))}
        >
          {resendCooldown !== 0 ? (
            <p>Resend code in {resendCooldown} </p>
          ) : (
            <p>Resend Code</p>
          )}
        </Button>
      </div>
    </Form>
  );
};
