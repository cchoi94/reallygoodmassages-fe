import cls from './navBar.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { Path } from 'app/Path';

export const NavBar: React.FC = () => {
  return (
    <div id='navbar' className={cls.container}>
      <a className={cls.logo} href={Path.HOME}>
        <div></div>
      </a>
      <div className={cls.links}>
        <Link to={Path.GLOSSARY}>Glossary</Link>
        <Link to={Path.ABOUT}>About</Link>
      </div>
    </div>
  );
};
