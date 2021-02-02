import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from 'app/assets/images/icons/logo.svg';
import { useAuth } from '../../auth/useAuth';

import cls from '../commons.module.scss';

export const Signin: React.FC = () => {
  const { signIn } = useAuth();
  return (
    <Form className={cls.container} onSubmit={signIn}>
      <Form.Group controlId='formBasicEmail'>
        <div className={cls.header}>
          <img src={Logo} alt={'really good massages logo'} />
          <p className={cls.title}>Sign In</p>
        </div>
        <Form.Control required type='email' placeholder='Email' name='email' />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Control
          required
          type='password'
          placeholder='Password'
          name='password'
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};
