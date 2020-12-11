import React from 'react';
import classNames from 'classnames';
import { Subscribe } from 'app/components/commons/subscribe/subscribe';
import ArrowIcon from 'app/assets/images/icons/arrow.svg';

import cls from './about.module.scss';

export const About: React.FC = () => {
  return (
    <div id={'about'} className={classNames('section', cls.section)}>
      <h1 className={'title'}>About Us</h1>
      <p className={classNames('description', cls.description)}>
        Really Good Massages is a project by the{' '}
        <a
          className={cls.link}
          target='_blank'
          rel='noopener noreferrer'
          href='http://posturenaut.com/'
        >
          Posturenauts
        </a>
        . We made this massage technique library for people to quickly relieve
        themselves of annoying pains.
      </p>
      <div className={'lineDivider'}></div>
      <div className={cls.infoBoxContainer}>
        <div className={cls.infoBox}>
          <p className={cls.title}>
            Like what we do? Tip us{' '}
            <span role='img' aria-label='present emoji'>
              🎁
            </span>
          </p>
          <p className={cls.infoBoxDescription}>
            Support us with a couple dollars, so we can keep updating this
            library for you.{' '}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<div id='popup-eggtartio' class='eggtartio-popup'><div class='overlay'></div><div class='content'><div onclick = 'togglePopup()' class='close-btn'> ×</div><iframe src=https://portal.eggtart.io/users/29/support width='100%' height='100%' style='border:0'></iframe></div><button onclick = 'togglePopup()' class = 'eggtartio-button'> Support Really Good Massages</button></div>",
            }}
          />
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
        <Subscribe
          buttonContent={<img src={ArrowIcon} alt='arrow icon' />}
          border
        />
      </div>
    </div>
  );
};
