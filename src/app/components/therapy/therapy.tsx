import React from 'react';
import { useTherapy } from './useTherapy';
import { GifContainer } from 'app/components/commons/gifContainer/gifContainer';
import classNames from 'classnames';
import { Path } from 'app/Path';
import { SideDescription } from 'app/components/commons/sideDescription/sideDescription';
import SupportedFingerTech from 'app/assets/images/handTechniques/supportedFingerTech.svg';
import SupportedHandTech from 'app/assets/images/handTechniques/supportedHandTech.svg';
import SupportedThumbTech from 'app/assets/images/handTechniques/supportedThumbTech.svg';

import cls from './therapy.module.scss';

export const Therapy: React.FC = () => {
  const { exerciseList, selectedExercise, setSelectedExercise } = useTherapy();
  return (
    <div className={'section'}>
      <div id='wrapper' className={'wrapper'}>
        <div className={'mainSection'}>
          {/* ideally want a Link Tag here rather than a, but we need to repload atm for 3p script */}
          <a
            href={Path.HOME}
            className={classNames('btn btn-secondary', cls.backBtn)}
          >
            <span className={cls.chevron}>{'<'}</span>Back
          </a>
          <p className={cls.header}>Try these out.</p>
          <GifContainer link={selectedExercise.gif} />
          <div className={cls.excercisesWrapper}>
            <p className={'bold'}>Techniques to try:</p>
            <div className={cls.excercisesContainer}>
              {exerciseList.map(({ name, thumbnail, gif }, index) => (
                <button
                  key={`${name}${index}`}
                  className={classNames(cls.thumbnailContainer, {
                    [cls.activeThumbnail]: selectedExercise.name === name,
                  })}
                  onClick={() =>
                    setSelectedExercise({
                      name,
                      thumbnail,
                      gif,
                    })
                  }
                >
                  <img
                    className={cls.thumbnail}
                    src={thumbnail}
                    alt={`thumbnail img of ${name} exercise`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        <SideDescription toolTipTitle={'Massage Tips & Tricks'}>
          <div className={'infoBox'}>
            <div className={'title'}>
              <p>Massage Guidlines</p>
            </div>
            <div className={'description'}>
              <ul>
                <li>Use deep stroking massage, not static pressure.</li>
                <li>Massage with short and slow repeated strokes.</li>
                <li>Do the massage stroke in one direction only.</li>
                <li>Aim at a pain level of 7 on a scale of one to 10.</li>
                <li>No more than a 1 minute per trigger point. </li>
                <li>
                  Work on a trigger point 6 - 12 times per day if you can.
                </li>
              </ul>
            </div>
          </div>
          <div className={'infoBox'}>
            <div className={'title'}>
              <p>General Tips</p>
            </div>
            <div className={'description'}>
              <p>
                Move the skin with the fingers. Release at the end of the
                stroke, then reset your fingers and repeat. You can massage with
                the grain of the fibers or across them.
              </p>
              <p className={'bold'}>Hand technique suggestions</p>
              <div className={cls.handTechniquesContainer}>
                <div className={cls.handTechnique}>
                  <img
                    src={SupportedThumbTech}
                    alt='img of supported thumb message technique'
                  />
                  <p>Supported Thumb</p>
                </div>
                <div className={cls.handTechnique}>
                  <img
                    src={SupportedFingerTech}
                    alt='img of supported finger message technique'
                  />
                  <p>Supported Finger</p>
                </div>
                <div className={cls.handTechnique}>
                  <img
                    src={SupportedHandTech}
                    alt='img of supported hand message technique'
                  />
                  <p>Supported Hand</p>
                </div>
              </div>
            </div>
          </div>
        </SideDescription>
      </div>
    </div>
  );
};
