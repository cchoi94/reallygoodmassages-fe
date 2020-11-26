import React from 'react';

import cls from './gifContainer.module.scss';

interface GifAttributes {
  link?: string;
  sizeRatio?: number;
}

export const GifContainer: React.FC<GifAttributes> = ({
  link = 'https://streamable.com/e/i2wph9?autoplay=1',
  sizeRatio = 35,
}) => {
  return (
    <div className={cls.wrapper} style={{ paddingBottom: `${sizeRatio}%` }}>
      <iframe
        title='gifIframe'
        className={cls.media}
        src={link}
        frameBorder='0'
      ></iframe>
    </div>
  );
};
