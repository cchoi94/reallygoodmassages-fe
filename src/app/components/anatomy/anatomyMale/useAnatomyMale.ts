import React from 'react';
const $ = require('jquery');

const resetStyles = {
  transform: 'scale(0.75)', // set zoom
  transformOrigin: '50% 50%', // back to original
};

export const useAnatomyMale = () => {
  const { transform, transformOrigin } = resetStyles;
  const resetZoom = () => {
    $('#basea').css({
      transform,
      transformOrigin,
    });
    $('#baseb').css({
      transform,
      transformOrigin,
    });
    $('#anatomyBackBtn').css({
      display: 'none',
    });
    $('#sideDescription').css({
      display: 'block',
    });
    $('#anatomyBackgroundText').css({
      display: 'block',
    });
    $('body').css({
      overflow: 'initial',
    });
  };

  return {
    resetZoom,
  };
};
