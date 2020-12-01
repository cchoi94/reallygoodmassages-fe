import React from 'react';
import classNames from 'classnames';

import cls from './glossary.module.scss';

export const Glossary: React.FC = () => {
  return (
    <div className={classNames('section', cls.section)}>
      <h1 className={'title'}>Glossary</h1>
      <div className={'lineDivider'}></div>
      <div className={cls.glossaryBox}>
        <p className={cls.title}>Myofascial Pain</p>
        <p className={'description'}>
          This type of pain can occur anywhere in the body. Myo in Myofascial
          refers to the muscle, Fascia is the thin, translucent membrane that
          envelopes and separate muscles. When trigger point is present in a
          muscle, the fascia covering it typically gets tight and inflexible and
          becomes part of the problem.
        </p>
        <div className={cls.emoStarDivider}>
          <span role='img' aria-label='star emoji'>
            ⭐️
          </span>
        </div>
      </div>
      <div className={cls.glossaryBox}>
        <p className={cls.title}>Referred Pain</p>
        <p className={'description'}>
          This is a pain you feel in one part of your body where the cause is
          not localized. It can come from injuries and pain from another part of
          your body. For example, front shoulder pain can be caused by tight
          back and neck.
        </p>
        <div className={cls.emoStarDivider}>
          <span role='img' aria-label='star emoji'>
            ⭐️
          </span>
        </div>
      </div>
      <div className={cls.glossaryBox}>
        <p className={cls.title}>Trigger point</p>
        <p className={'description'}>
          A highly irritable localized spot of exquisite tenderness in a nodule
          in the muscle tissues. It feel like knot or a small lump to the touch.
          It can range in size from a pinhead to a pea. Trigger points always
          hurt when pressed on.
        </p>
      </div>
    </div>
  );
};
