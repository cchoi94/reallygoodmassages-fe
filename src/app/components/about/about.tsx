import React from 'react';
import classNames from 'classnames';

import cls from './about.module.scss';

export const About: React.FC = () => {
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
      <div className={cls.lineDivider}></div>
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
        <div>
          <p>Subscribe</p>
          <p>
            Get updates on when we add new therapy techniques, tips and
            knowledge drop.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
