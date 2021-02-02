import React, { useState } from 'react';
import { AuthWrapper } from 'app/components/auth/authWrapper/authWrapper';
import classNames from 'classnames';

import cls from './userPanel.module.scss';

export const UserPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={classNames(cls.container, { [cls.open]: isOpen })}>
      <button className={cls.userPanelTab} onClick={() => setIsOpen(!isOpen)}>
        My RGM
      </button>
      <AuthWrapper wasSigninClicked={arg => setIsOpen(arg)}>
        Favourited massages
        <ul>
          {new Array(10).fill(0).map(num => (
            <li>num</li>
          ))}
        </ul>
      </AuthWrapper>
    </div>
  );
};
