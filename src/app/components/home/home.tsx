import React from 'react';
import { AnatomyMale } from 'app/components/anatomy/anatomyMale/anatomyMale';
import { NavBar } from 'app/components/navbar/navBar';

import cls from './home.module.scss';

export const Home: React.FC = () => {
  return (
    <div className={'section'}>
      <div id='homeWrapper' className={cls.homeWrapper}>
        <AnatomyMale />
        <div id='sideDescription' className={cls.sideDescription}>
          <div className={cls.infoBox}>
            <div className={cls.title}>
              <p>What is it?</p>
            </div>
            <div className={cls.description}>
              <p>
                This is a library of massage techniques based on the teachings
                from Clair Davies{' '}
                <span className={cls.bold}>
                  “Trigger Point Therapy Work Book”.
                </span>{' '}
                Now you can make your own pain go away without relying on
                anybody.
              </p>
              <p>
                We are only dealing with{' '}
                <span className={cls.bold}>neck, shoulder</span> and{' '}
                <span className={cls.bold}>back </span>pain right now. We will
                continue to update the library to include all the other areas.
              </p>
              <p className={cls.bold}>It’s free to use.</p>
            </div>
          </div>
          <div className={cls.infoBox}>
            <div className={cls.title}>
              <p>How does it work?</p>
            </div>
            <div className={cls.description}>
              <ul>
                <li>
                  Tell us where you are hurting by clicking on the corresponding
                  spots on the anatomical model
                </li>
                <li>
                  We will show you a list of techniques focused on addressing
                  that area.
                </li>
                <li>
                  Follow the animated gifs to rid of yourself of these pains.
                </li>
              </ul>
              <p className={cls.emoBullet}>
                <span role='img' aria-label='star'>
                  ⭐️
                </span>{' '}
                <p>
                  <span className={cls.bold}>Bonus:</span> Email us and let us
                  know if these technique are effective for you. We’d love to
                  learn and continue to improve on the library.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
