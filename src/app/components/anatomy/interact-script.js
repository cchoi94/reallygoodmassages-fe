import $ from 'jquery';
import { anaconfig } from './anatomySettings/anatomy-settings';
/* eslint-disable */
function isTouchEnabled() {
  return (
    'ontouchstart' in window ||
    navigator.MaxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

const resetZoom = () => {
  $('#basea').css({
    transform: 'scale(1)',
    transformOrigin: '50% 50%',
  });
  $('#baseb').css({
    transform: 'scale(1)',
    transformOrigin: '50% 50%',
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

$(document).ready(function() {
  $('#anaspotsa').hide();
  $('#anaspotsb').hide();
  $('#baseb')
    .hide()
    .animate({ opacity: '0' }, 100);
  $('.gob').on('click', function() {
    resetZoom();
    $('#baseb')
      .hide()
      .animate({ opacity: '0' }, 100);
    $('#basea')
      .show()
      .animate({ opacity: '1' }, 100);
    $('#anatomyBackgroundText')[0].innerText = 'BACK';
  });
  $('.goa').on('click', function() {
    resetZoom();
    $('#basea')
      .hide()
      .animate({ opacity: '0' }, 100);
    $('#baseb')
      .show()
      .animate({ opacity: '1' }, 100);
    $('#anatomyBackgroundText')[0].innerText = 'FRONT';
  });
});
$(function() {
  $('path[id^=ana]').each(function(i, e) {
    anaaddEvent($(e).attr('id'));
  });
});
function anaaddEvent(id, relationId) {
  var arr = id.split('');
  var _obj = $('#' + id + ',' + arr.slice().join(''));
  _obj.attr({
    fill: 'rgba(255, 0, 0, 0)',
    stroke: anaconfig.default.outlineColor,
  });
  _obj.attr({ cursor: 'default' });
  if (anaconfig[id].enabled === true) {
    _obj.attr({ cursor: 'pointer' });
    _obj.hover(
      function() {
        $('#anatip')
          .show()
          .html(anaconfig[id].hover);
        _obj.css({ fill: 'rgba(255, 0, 0, 0.3)' });
      },
      function() {
        $('#anatip').hide();
        $('#' + id).css({ fill: 'rgba(255, 0, 0, 0)' });
      }
    );
    if (anaconfig[id].target !== 'none') {
      _obj.mousedown(function() {
        $('#' + id).css({ fill: 'rgba(255, 0, 0, 0.7)' });
      });
    }
    _obj.mouseup(function() {
      $('#' + id).css({ fill: 'rgba(255, 0, 0, 0.3)' });
      if (anaconfig[id].target === 'new_window') {
        window.open(anaconfig[id].url);
      } else if (anaconfig[id].target === 'same_window') {
        window.parent.location.href = anaconfig[id].url;
      } else if (anaconfig[id].target === 'modal') {
        $(anaconfig[id].url).modal('show');
      } else if (anaconfig[id].target === 'zoom') {
        const cor = anaconfig[id].position.split(' ');
        $(anaconfig[id].isFrontFacing ? '#baseb' : '#basea').css({
          transform: `scale(5) translateX(${cor[0]}) translateY(${cor[1]})`, // set zoom
          transition: '1s',
        });
        $('#anatomyBackBtn').css({
          display: 'block',
        });
        $('#anaspotsa').show();
        $('#anaspotsb').show();
        $('#instructions').hide();
        $('#anatomyBackgroundText').hide();
        $('#anatomyWrapper').css({
          overflow: 'hidden',
        });
      }
    });
    _obj.mousemove(function(e) {
      var x = e.pageX + 10,
        y = e.pageY + 15;
      var tipw = $('#anatip').outerWidth(),
        tiph = $('#anatip').outerHeight(),
        x =
          x + tipw > $(document).scrollLeft() + $(window).width()
            ? x - tipw - 20 * 2
            : x;
      y =
        y + tiph > $(document).scrollTop() + $(window).height()
          ? $(document).scrollTop() + $(window).height() - tiph - 10
          : y;
      $('#anatip').css({ left: x, top: y });
    });
    if (isTouchEnabled()) {
      _obj.on('touchstart', function(e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10,
          y = touch.pageY + 15;
        var tipw = $('#anatip').outerWidth(),
          tiph = $('#anatip').outerHeight(),
          x =
            x + tipw > $(document).scrollLeft() + $(window).width()
              ? x - tipw - 20 * 2
              : x;
        y =
          y + tiph > $(document).scrollTop() + $(window).height()
            ? $(document).scrollTop() + $(window).height() - tiph - 10
            : y;
        $('#' + id).css({ fill: 'rgba(255, 0, 0, 0.7)' });
        $('#anatip')
          .show()
          .html(anaconfig[id].hover);
        $('#anatip').css({ left: x, top: y });
      });
      _obj.on('touchend', function() {
        $('#' + id).css({ fill: 'rgba(255, 0, 0, 0)' });
        if (anaconfig[id].target === 'new_window') {
          window.open(anaconfig[id].url);
        } else if (anaconfig[id].target === 'same_window') {
          window.parent.location.href = anaconfig[id].url;
        } else if (anaconfig[id].target === 'modal') {
          $(anaconfig[id].url).modal('show');
        } else if (anaconfig[id].target === 'zoom') {
          const cor = anaconfig[id].position.split(' ');
          $(anaconfig[id].isFrontFacing ? '#basea' : '#baseb').css({
            transform: `scale(5) translateX(${cor[0]}) translateY(${cor[1]})`, // set zoom
            transition: '1s',
          });
          $('#anatomyBackBtn').css({
            display: 'block',
          });
          $('#anaspotsa').show();
          $('#instructions').hide();
          $('#anatomyBackgroundText').hide();
          $('#anatomyWrapper').css({
            overflow: 'hidden',
          });
        }
      });
    }
  }
}
