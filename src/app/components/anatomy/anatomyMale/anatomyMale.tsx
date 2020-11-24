import React from 'react';
import cls from './anatomyMale.module.scss';
import { useAnatomyMale } from './useAnatomyMale';

const anatomyMale = require('./index.html');

export const AnatomyMale: React.FC = () => {
  const { resetZoom } = useAnatomyMale();
  return (
    <>
      <button id='anatomyBackBtn' className={cls.backBtn} onClick={resetZoom}>
        Back
      </button>
      <div className={cls.homeWrapper}>
        <div className={cls.anatomyWrapper}>
          <h1 id='anatomyBackgroundText' className={cls.backgroundText}>
            Front
          </h1>
          <div dangerouslySetInnerHTML={{ __html: anatomyMale }} />
          <p>Tell us where you are hurting by clicking on that spot.</p>
        </div>
        <div id='sideDescription' className={cls.sideDescription}>
          sidebar
        </div>
      </div>
    </>
  );
};
