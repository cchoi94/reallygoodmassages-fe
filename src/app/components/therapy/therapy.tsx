import React from 'react';
import { useTherapy } from './useTherapy';
import { GifContainer } from '../commons/gifContainer/gifContainer';
import classNames from 'classnames';
import { Path } from 'app/Path';

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
          <div className={cls.excercisesContainer}>
            {exerciseList.map(({ name, thumbnail, gif }, index) => (
              <button
                key={`${name}${index}`}
                className={classNames('btn', cls.thumbnailContainer, {
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
        <div id='sideDescription' className={'sideDescription'}>
          <div className={'infoBox'}>
            <div className={'title'}>
              <p>Message Techniques</p>
            </div>
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
            <div className={'title'}>
              <p>General Tips</p>
            </div>
            <div className={'description'}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
