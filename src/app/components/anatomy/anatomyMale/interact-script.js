import $ from 'jquery';
import { anaconfig } from './anatomy-settings';
function isTouchEnabled() {
  return (
    'ontouchstart' in window ||
    navigator.MaxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
$(document).ready(function() {
  $('#baseb')
    .hide()
    .animate({ opacity: '0' }, 100);
  $('.gob').on('click', function() {
    $('#basea')
      .hide()
      .animate({ opacity: '0' }, 100);
    $('#baseb')
      .show()
      .animate({ opacity: '1' }, 100);
    $('#anatomyBackgroundText')[0].innerText = 'BACK';
  });
  $('.goa').on('click', function() {
    $('#baseb')
      .hide()
      .animate({ opacity: '0' }, 100);
    $('#basea')
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
        $(anaconfig[id].isFrontFacing ? '#basea' : '#baseb').css({
          transform: 'scale(' + 5 + ')', // set zoom
          transformOrigin: anaconfig[id].position, // set transform scale base
          transition: '1s',
        });
        $('body').css({
          overflow: 'hidden',
        });
        $('#anatomyBackBtn').css({
          display: 'block',
        });
        $('#sideDescription').css({
          display: 'none',
        });
        $('#anatomyBackgroundText').css({
          display: 'none',
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
          $(anaconfig[id].isFrontFacing ? '#basea' : '#baseb').css({
            transition: '1s',
            transform: 'scale(' + 4 + ')', // set zoom
            transformOrigin: anaconfig[id].position, // set transform scale base
          });
        }
      });
    }
  }
}
