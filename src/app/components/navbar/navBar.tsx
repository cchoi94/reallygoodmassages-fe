import React from 'react';
import { Link } from 'react-router-dom';
import { Path } from 'app/Path';
import HamburgerIcon from 'app/assets/images/icons/hamburger.svg';
import XIcon from 'app/assets/images/icons/x.svg';
import classNames from 'classnames';
import { useNavBar } from './useNavBar';
import LogoWithText from 'app/assets/images/icons/logoWithText.svg';
import LogoIcon from 'app/assets/images/icons/logo.svg';
import InstagramIcon from 'app/assets/images/icons/instagram.svg';
import FacebookIcon from 'app/assets/images/icons/facebook.png';
import TwitterIcon from 'app/assets/images/icons/twitter.svg';

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
        <a onClick={() => setIsHambugerMenuOpen(false)} href='/#about'>
          About
        </a>
        <a
          href='https://www.producthunt.com/posts/really-good-massages?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-really-good-massages'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=279302&theme=light'
            alt='Really Good Massages - Alleviating muscle pain with short and simple DIY massages. | Product Hunt'
            style={{ width: '160px', height: '36px' }}
          />
        </a>
        <div className={cls.socialIcons}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.instagram.com/reallygoodmassages/'
          >
            <img
              className={cls.icon}
              src={InstagramIcon}
              alt='instagram icon with link'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/reallygoodmassages'
          >
            <img
              className={cls.icon}
              src={FacebookIcon}
              alt='facebook icon with link'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://twitter.com/RGMassages'
          >
            <img
              className={cls.icon}
              src={TwitterIcon}
              alt='facebook icon with link'
            />
          </a>
        </div>
      </div>
    </div>
  );
};
