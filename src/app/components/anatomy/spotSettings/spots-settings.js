import $ from 'jquery';
import { spotsConfigA, spotsConfigB } from './configs/spotConfigs';
/* eslint-disable */

/*==============================================================================*/
/*==============================================================================*/
/*===== The following is the script for pins interaction DON'T EDIT !!!  =======*/
/*==============================================================================*/
/*==============================================================================*/
function isTouchEnabled() {
  return (
    'ontouchstart' in window ||
    navigator.MaxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
$(function() {
  var pins_len = spotsConfigA.pins.length;
  if (pins_len > 0) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var tsvg_obj = document.getElementById('anaspotsa');
    var svg_circle;
    for (var i = 0; i < pins_len; i++) {
      svg_circle = document.createElementNS(xmlns, 'circle');
      svg_circle.setAttributeNS(null, 'cx', spotsConfigA.pins[i].pos_X);
      svg_circle.setAttributeNS(null, 'cy', spotsConfigA.pins[i].pos_Y);
      svg_circle.setAttributeNS(null, 'r', spotsConfigA.pins[i].size / 2);
      svg_circle.setAttributeNS(null, 'fill', spotsConfigA.pins[i].upColor);
      svg_circle.setAttributeNS(null, 'stroke', spotsConfigA.pins[i].outline);
      svg_circle.setAttributeNS(null, 'stroke-width', 1);
      svg_circle.setAttributeNS(null, 'id', 'anaspotsa_' + i);
      if (tsvg_obj) {
        tsvg_obj.appendChild(svg_circle);
      }
      anaspotsaAddEvent(i);
    }
  }
});
function anaspotsaAddEvent(id) {
  var obj = $('#anaspotsa_' + id);
  if (spotsConfigA.pins[id].enabled === true) {
    obj.attr({ cursor: 'pointer' });
    obj.hover(
      function() {
        $('#anatip')
          .show()
          .html(spotsConfigA.pins[id].hover);
        obj.css({ fill: spotsConfigA.pins[id].overColor });
      },
      function() {
        $('#anatip').hide();
        obj.css({ fill: spotsConfigA.pins[id].upColor });
      }
    );
    obj.mouseup(function() {
      obj.css({ fill: spotsConfigA.pins[id].overColor });
      if (spotsConfigA.pins[id].target === 'new_window') {
        window.open(spotsConfigA.pins[id].url);
      } else if (spotsConfigA.pins[id].target === 'same_window') {
        window.parent.location.href = spotsConfigA.pins[id].url;
      } else if (spotsConfigA.pins[id].target === 'modal') {
        $(spotsConfigA.pins[id].url).modal('show');
      }
    });
    obj.mousemove(function(e) {
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
      obj.on('touchstart', function(e) {
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
        $('#anatip')
          .show()
          .html(spotsConfigA.pins[id].hover);
        $('#anatip').css({ left: x, top: y });
      });
      obj.on('touchend', function() {
        $('#' + id).css({ fill: spotsConfigA.pins[id].upColor });
        if (spotsConfigA.pins[id].target === 'new_window') {
          window.open(spotsConfigA.pins[id].url);
        } else if (spotsConfigA.pins[id].target === 'same_window') {
          window.parent.location.href = spotsConfigA.pins[id].url;
        } else if (spotsConfigA.pins[id].target === 'modal') {
          $(spotsConfigA.pins[id].url).modal('show');
        }
      });
    }
  }
}
$(function() {
  var pins_len = spotsConfigB.pins.length;
  if (pins_len > 0) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var tsvg_obj = document.getElementById('anaspotsb');
    var svg_circle;
    for (var i = 0; i < pins_len; i++) {
      svg_circle = document.createElementNS(xmlns, 'circle');
      svg_circle.setAttributeNS(null, 'cx', spotsConfigB.pins[i].pos_X);
      svg_circle.setAttributeNS(null, 'cy', spotsConfigB.pins[i].pos_Y);
      svg_circle.setAttributeNS(null, 'r', spotsConfigB.pins[i].size / 2);
      svg_circle.setAttributeNS(null, 'fill', spotsConfigB.pins[i].upColor);
      svg_circle.setAttributeNS(null, 'stroke', spotsConfigB.pins[i].outline);
      svg_circle.setAttributeNS(null, 'stroke-width', 1);
      svg_circle.setAttributeNS(null, 'id', 'anaspotsb_' + i);
      if (tsvg_obj) {
        tsvg_obj.appendChild(svg_circle);
      }
      anaspotsbAddEvent(i);
    }
  }
});
function anaspotsbAddEvent(id) {
  var obj = $('#anaspotsb_' + id);
  if (spotsConfigB.pins[id].enabled === true) {
    obj.attr({ cursor: 'pointer' });
    obj.hover(
      function() {
        $('#anatip')
          .show()
          .html(spotsConfigB.pins[id].hover);
        obj.css({ fill: spotsConfigB.pins[id].overColor });
      },
      function() {
        $('#anatip').hide();
        obj.css({ fill: spotsConfigB.pins[id].upColor });
      }
    );
    obj.mouseup(function() {
      obj.css({ fill: spotsConfigB.pins[id].overColor });
      if (spotsConfigB.pins[id].target === 'new_window') {
        window.open(spotsConfigB.pins[id].url);
      } else if (spotsConfigB.pins[id].target === 'same_window') {
        window.parent.location.href = spotsConfigB.pins[id].url;
      } else if (spotsConfigB.pins[id].target === 'modal') {
        $(spotsConfigB.pins[id].url).modal('show');
      }
    });
    obj.mousemove(function(e) {
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
      obj.on('touchstart', function(e) {
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
        $('#anatip')
          .show()
          .html(spotsConfigB.pins[id].hover);
        $('#anatip').css({ left: x, top: y });
      });
      obj.on('touchend', function() {
        $('#' + id).css({ fill: spotsConfigB.pins[id].upColor });
        if (spotsConfigB.pins[id].target === 'new_window') {
          window.open(spotsConfigB.pins[id].url);
        } else if (spotsConfigB.pins[id].target === 'same_window') {
          window.parent.location.href = spotsConfigB.pins[id].url;
        } else if (spotsConfigB.pins[id].target === 'modal') {
          $(spotsConfigB.pins[id].url).modal('show');
        }
      });
    }
  }
}
