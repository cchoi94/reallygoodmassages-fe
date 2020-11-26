import React from 'react';

import cls from './gifContainer.module.scss';

interface GifAttributes {
  link?: string;
}

export const GifContainer: React.FC<GifAttributes> = ({
  link = 'https://streamable.com/e/i2wph9',
}) => {
  return (
    <div className={cls.wrapper}>
      <iframe
        title='gifIframe'
        className={cls.media}
        src={`${link}?autoplay=1`}
        frameBorder='0'
      ></iframe>
    </div>
  );
};
