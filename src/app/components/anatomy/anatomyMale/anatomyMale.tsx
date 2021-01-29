import React from 'react';
import cls from './anatomyMale.module.scss';
import { useAnatomyMale } from './useAnatomyMale';
import classNames from 'classnames';

const anatomyMale = require('../index.html');

export const AnatomyMale: React.FC = () => {
  const { resetZoom } = useAnatomyMale();
  return (
    <>
      <button
        id='anatomyBackBtn'
        className={classNames('btn btn-secondary', cls.backBtn)}
        onClick={resetZoom}
      >
        <span className={cls.chevron}>{'<'}</span>Back
      </button>
      <h1 id='anatomyBackgroundText' className={cls.backgroundText}>
        Back
      </h1>
      <div
        className={cls.anatomy}
        dangerouslySetInnerHTML={{ __html: anatomyMale }}
      />
      <p id='instructions' className={cls.instructions}>
        <span className={cls.approvedInstructions}>
          Massage Techniques approved by certified RMT.
        </span>
        Tell us where you are hurting by clicking on that spot.
      </p>
    </>
  );
};
