import React from 'react';
import { useSideDescription } from './useSideDescription';
import classNames from 'classnames';

import cls from './sideDescription.module.scss';

interface OwnProps {
  toolTipTitle: string;
  children?: JSX.Element | JSX.Element[];
}

export const SideDescription: React.FC<OwnProps> = ({
  toolTipTitle,
  children,
}) => {
  const {
    isSideDescriptionShown,
    setIsSideDescriptionShown,
  } = useSideDescription();
  return (
    <>
      <div className={cls.sideDescriptionToolTip}>
        <p className={classNames(cls.toolTipTitle, 'bold')}>{toolTipTitle}</p>
        <span
          className={cls.questionMarkIcon}
          onMouseEnter={() => setIsSideDescriptionShown(true)}
          onMouseLeave={() => setIsSideDescriptionShown(false)}
        >
          ?
        </span>
        <span
          className={classNames(
            cls.questionMarkIcon,
            cls.questionMarkIconMobile
          )}
          onClick={() => setIsSideDescriptionShown(!isSideDescriptionShown)}
        >
          ?
        </span>
      </div>
      <div
        id='sideDescription'
        className={classNames(cls.sideDescription, {
          [cls.show]: isSideDescriptionShown,
          [cls.hide]: !isSideDescriptionShown,
        })}
        onMouseLeave={() => setIsSideDescriptionShown(false)}
      >
        {children}
      </div>
    </>
  );
};
