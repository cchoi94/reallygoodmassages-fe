import React from 'react';
import { Link } from 'react-router-dom';
import { Path } from 'app/Path';
import HamburgerIcon from 'app/assets/images/icons/hamburger.svg';
import XIcon from 'app/assets/images/icons/x.svg';
import classNames from 'classnames';
import { useNavBar } from './useNavBar';
import LogoWithText from 'app/assets/images/icons/logoWithText.svg';
import LogoIcon from 'app/assets/images/icons/logo.svg';

import cls from './navBar.module.scss';

export const NavBar: React.FC = () => {
  const { isHambugerMenuOpen, setIsHambugerMenuOpen } = useNavBar();

  return (
    <div id='navbar' className={cls.container}>
      <a className={cls.logo} href={Path.HOME}>
        <img
          className={cls.logoWithText}
          src={LogoWithText}
          alt='Really Good Message Logo'
        />
        <img
          className={cls.logoIcon}
          src={LogoIcon}
          alt='Really Good Message Icon'
        />
      </a>
      <div
        className={cls.hamburger}
        onClick={() => {
          setIsHambugerMenuOpen(!isHambugerMenuOpen);
        }}
      >
        {isHambugerMenuOpen ? (
          <img src={XIcon} alt='x menu icon' />
        ) : (
          <img src={HamburgerIcon} alt='hamburger menu icon' />
        )}
      </div>
      <div
        className={classNames(cls.links, {
          [cls.show]: isHambugerMenuOpen,
          [cls.hide]: !isHambugerMenuOpen,
        })}
      >
        <Link onClick={() => setIsHambugerMenuOpen(false)} to={Path.GLOSSARY}>
          Glossary
        </Link>
        <Link
          onClick={() => setIsHambugerMenuOpen(false)}
          to={Path.WHATSCOMMING}
        >
          What's coming?
        </Link>
        <Link onClick={() => setIsHambugerMenuOpen(false)} to={Path.ABOUT}>
          About
        </Link>
      </div>
    </div>
  );
};
