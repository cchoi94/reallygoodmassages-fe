import React, { useState } from 'react';
import classNames from 'classnames';
import { FavoriteMassages } from './favoriteMassages/favoriteMassages';
import { useSelector } from 'react-redux';
import { RootState } from 'app/redux/rootReducer';
import { capitalize } from 'lodash/fp';

import cls from './userPanel.module.scss';

export const UserPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { username, favoriteMassages } = useSelector(
    (state: RootState) => state.user
  );

  return (
    <div className={classNames(cls.container, { [cls.open]: isOpen })}>
      <button className={cls.userPanelTab} onClick={() => setIsOpen(!isOpen)}>
        My RGM
      </button>
      <div className={cls.header}>
        <h1 className={cls.userName}>
          <span role='img' aria-label='wave emoji'>
            👋
          </span>{' '}
          {username ? capitalize(username)! : 'Sign in to start!'}
        </h1>
      </div>
      <FavoriteMassages
        toggleUserPannel={setIsOpen}
        favoriteMassages={favoriteMassages}
      />
    </div>
  );
};
