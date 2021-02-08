import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from 'app/assets/images/icons/logo.svg';
import { useAuth } from '../../auth/useAuth';
import { Link } from 'react-router-dom';
import { Path } from 'app/Path';
import classNames from 'classnames';

import cls from '../commons.module.scss';

export const Signup: React.FC = () => {
  const { signUp } = useAuth();
  return (
    <Form className={cls.container} onSubmit={signUp}>
      <div className={cls.header}>
        <img src={Logo} alt={'really good massages logo'} />
        <p className={cls.title}>Sign Up</p>
      </div>

      <Form.Group controlId='formBasicName'>
        <Form.Control required type='text' placeholder='Name' name='name' />
      </Form.Group>

      <Form.Group controlId='formBasicEmail'>
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

      <Button
        variant='primary'
        type='submit'
        className={classNames(cls.submitBtn)}
      >
        Submit
      </Button>
      <div>
        <p>
          Already have an account? <Link to={Path.SIGNIN}>Sign in here!</Link>
        </p>
      </div>
    </Form>
  );
};
