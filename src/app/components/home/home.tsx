import React from 'react';
import { AnatomyMale } from 'app/components/anatomy/anatomyMale/anatomyMale';

import cls from './home.module.scss';

export const Home: React.FC = () => {
  return (
    <>
      Hi this is home
      <div>
        <AnatomyMale />
      </div>
    </>
  );
};
