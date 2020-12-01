import React from 'react';
import classNames from 'classnames';
import { useAbout } from './useAbout';
import ArrowIcon from 'app/assets/images/icons/arrow.svg';

import cls from './about.module.scss';

export const About: React.FC = () => {
  const { onSubmit } = useAbout();
  return (
    <div className={classNames('section', cls.section)}>
      <h1 className={'title'}>About Us</h1>
      <p className={classNames('description', cls.description)}>
        “” is a project by the{' '}
        <a className={cls.link} href='http://posturenaut.com/'>
          Posturenauts
        </a>
        . We made this massage technique library for people to quickly relief
        themselves of annoying pains.
      </p>
      <div className={'lineDivider'}></div>
      <div className={cls.infoBoxContainer}>
        <div className={cls.infoBox}>
          <p className={cls.title}>
            Like what we do? Tip Us{' '}
            <span role='img' aria-label='present emoji'>
              🎁
            </span>
          </p>
          <p className={cls.infoBoxDescription}>
            Support us with couple dollars, so we can keep updating this library
            for you.{' '}
          </p>
          <button>Support</button>
          {/* eggtart button */}
        </div>
        <div className={cls.infoBox}>
          <p className={cls.title}>
            Contact{' '}
            <span role='img' aria-label='mailbox emoji'>
              📬
            </span>
          </p>
          <p className={cls.infoBoxDescription}>
            See an error? Have suggestions, requests or questions? Email us @
          </p>
          <a className={cls.link} href='mailto:hello@posturenaut.com'>
            hello@posturenaut.com
          </a>
        </div>
      </div>
      <div className={cls.subscribe}>
        <div className={cls.subscribeSection}>
          <p className={cls.title}>Subscribe</p>
          <p>
            Get updates on when we add new therapy techniques, tips and
            knowledge drop.{' '}
          </p>
        </div>
        <form
          action='https://buttondown.email/api/emails/embed-subscribe/Aladar'
          method='post'
          target='popupwindow'
          onSubmit={onSubmit}
          className={cls.subscribeForm}
        >
          <input
            type='email'
            name='email'
            id='bd-email'
            placeholder='Enter your email address'
            className={cls.subscribeEmailInput}
          ></input>
          <input type='hidden' value='1' name='embed'></input>
          <button type='submit' className={cls.subscribeBtn}>
            <img src={ArrowIcon} alt='arrow icon' />
          </button>
        </form>
      </div>
    </div>
  );
};
