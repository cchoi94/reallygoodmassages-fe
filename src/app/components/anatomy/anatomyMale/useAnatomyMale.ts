const $ = require('jquery');

const resetStyles = {
  transform: 'scale(1)', // set zoom
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
    if ($(window).width() >= 1265) {
      $('#homeWrapper').css({
        border: '4px solid #2992fe',
      });
    }
    $('#instructions').show();
    $('#navbar').show();
    $('#anaspotsa').hide();
    $('#anaspotsb').hide();
    $('body').css({
      overflow: 'initial',
    });
  };

  return {
    resetZoom,
  };
};
