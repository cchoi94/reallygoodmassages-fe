import React from 'react';
import { AnatomyMale } from 'app/components/anatomy/anatomyMale/anatomyMale';
import classNames from 'classnames';
import { SideDescription } from 'app/components/commons/sideDescription/sideDescription';
import { About } from 'app/components/about/about';

import cls from './home.module.scss';

export const Home: React.FC = () => (
  <>
    <div className={classNames('section')}>
      <div id='wrapper' className={'wrapper'}>
        <div id='anatomyWrapper' className={'mainSection'}>
          <AnatomyMale />
        </div>
        <SideDescription toolTipTitle={'How does it work?'}>
          <div className={'infoBox'}>
            <p className={'title'}>What is it?</p>
            <div className={'description'}>
              <p>
                This is a library of massage techniques based on the teachings
                from Clair Davies{' '}
                <span className={'bold'}>
                  “Trigger Point Therapy Work Book”.
                </span>{' '}
                Now you can make your own pain go away without relying on
                anybody.
              </p>
              <p>
                We are only dealing with{' '}
                <span className={'bold'}>neck, shoulder</span> and{' '}
                <span className={'bold'}>back </span>pain right now. We will
                continue to update the library to include all the other areas.
              </p>
              <p className={'bold'}>It’s free to use.</p>
            </div>
          </div>
          <div className={'infoBox'}>
            <p className={'title'}>How does it work?</p>
            <div className={'description'}>
              <ul>
                <li>
                  Tell us where you are hurting by clicking on the corresponding
                  spots on the anatomical model.
                </li>
                <li>
                  We will show you a list of techniques focused on addressing
                  that area.
                </li>
                <li>
                  Follow the animated gifs to rid of yourself of these pains.
                </li>
              </ul>
              <div className={cls.emoBullet}>
                <span className={cls.starEmo} role='img' aria-label='star'>
                  ⭐️
                </span>{' '}
                <p>
                  <span className={'bold'}>Bonus:</span> Email us and let us
                  know if these technique are effective for you. We’d love to
                  learn and continue to improve on the library.
                </p>
              </div>
            </div>
          </div>
        </SideDescription>
      </div>
    </div>
    <About />
  </>
);
