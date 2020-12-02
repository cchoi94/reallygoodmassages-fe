import React from 'react';
import classNames from 'classnames';

import cls from './whatscoming.module.scss';

export const Whatscoming: React.FC = () => {
  return (
    <div className={classNames('section', cls.section)}>
      <h1 className={'headerTitle'}>What's coming?</h1>
      <div className={'lineDivider'}></div>
      <p className={'description'}>
        We are on a mission to create a comprehensive and easy to use massage
        therapy library to address all your bodily aches.
      </p>
      <div className={cls.whatsComingList}>
        <div className={cls.whatsComingItem}>
          <p className={cls.title}>Lower back pain - Dec 11</p>
          <div className={cls.emoStarDivider}>
            <span role='img' aria-label='star emoji'>
              ⭐️
            </span>
          </div>
        </div>
        <div className={cls.whatsComingItem}>
          <p className={cls.title}>Headaches - Dec 18</p>
          <div className={cls.emoStarDivider}>
            <span role='img' aria-label='star emoji'>
              ⭐️
            </span>
          </div>
        </div>
        <div className={cls.whatsComingItem}>
          <p className={cls.title}>Elbow Pain - Dec 25</p>
          <div className={cls.emoStarDivider}>
            <span role='img' aria-label='star emoji'>
              ⭐️
            </span>
          </div>
        </div>
        <div className={cls.whatsComingItem}>
          <p className={cls.title}>Wrist Pain - Jan 1</p>
          <div className={cls.emoStarDivider}>
            <span role='img' aria-label='star emoji'>
              ⭐️
            </span>
          </div>
        </div>
        <div className={cls.whatsComingItem}>
          <p className={cls.title}>Wrist Pain - Jan 1</p>
        </div>
      </div>
    </div>
  );
};
