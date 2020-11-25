import cls from './navBar.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
  return (
    <div id='navbar' className={cls.container}>
      <div className={cls.logo}>Logo</div>
      <div className={cls.links}>
        <Link to=''>Glossary</Link>
        <Link to=''>About</Link>
      </div>
    </div>
  );
};
