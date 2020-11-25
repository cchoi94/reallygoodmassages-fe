import $ from 'jquery';
/* eslint-disable */

/*============================================================================================*/
/*===== In the following section you can add/remove/modify the spots of the front side =======*/
/*============================================================================================*/
var spotsconfiga = {
  pins: [
    {
      hover:
        "<u><b>Example 'A'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 426, //check the X, Y coordinates guide in the documentation
      pos_Y: 360,
      size: 10, //size of the pin
      outline: '#cc2900', //outline color of the pin
      upColor: '#ff6600', //color of the pin when drawing load
      overColor: '#cc2900', //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      hover:
        "<u><b>Example 'B'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.",
      pos_X: 319,
      pos_Y: 815,
      size: 10,
      outline: '#FF0000',
      upColor: 'rgba(255, 0, 0, 0.3)',
      overColor: 'rgba(255, 0, 0, 0.7)',
      url: 'https://google.ca',
      target: 'same_window',
      enabled: true,
    },
  ],
};
/*=============================================================================================*/
/*===== In the following section you can add/remove/modify the spots of the back side =========*/
/*=============================================================================================*/
var spotsconfigb = {
  pins: [
    {
      hover:
        "<u><b>Example 'C'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.", //info of the popup
      pos_X: 137, //check the X, Y coordinates guide in the documentation
      pos_Y: 635,
      size: 40, //size of the pin
      outline: '#cc2900', //outline color of the pin
      upColor: '#ff6600', //color of the pin when drawing load
      overColor: '#cc2900', //color of the pin when mouse hover
      url: 'https://www.humananatomyillustrations.com/', //link to any webpage
      target: 'new_window', // use "new_window", "same_window", "modal", or "none"
      enabled: true, //true/false to activate/deactivate this pin
    },
    {
      hover:
        "<u><b>Example 'D'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.",
      pos_X: 328,
      pos_Y: 1080,
      size: 50,
      outline: '#FF0000',
      upColor: 'rgba(255, 0, 0, 0.3)',
      overColor: 'rgba(255, 0, 0, 0.7)',
      url: 'https://www.humananatomyillustrations.com/',
      target: 'same_window',
      enabled: true,
    },
  ],
};
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
  var pins_len = spotsconfiga.pins.length;
  if (pins_len > 0) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var tsvg_obj = document.getElementById('anaspotsa');
    var svg_circle;
    for (var i = 0; i < pins_len; i++) {
      svg_circle = document.createElementNS(xmlns, 'circle');
      svg_circle.setAttributeNS(null, 'cx', spotsconfiga.pins[i].pos_X);
      svg_circle.setAttributeNS(null, 'cy', spotsconfiga.pins[i].pos_Y);
      svg_circle.setAttributeNS(null, 'r', spotsconfiga.pins[i].size / 2);
      svg_circle.setAttributeNS(null, 'fill', spotsconfiga.pins[i].upColor);
      svg_circle.setAttributeNS(null, 'stroke', spotsconfiga.pins[i].outline);
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
  if (spotsconfiga.pins[id].enabled === true) {
    obj.attr({ cursor: 'pointer' });
    obj.hover(
      function() {
        $('#anatip')
          .show()
          .html(spotsconfiga.pins[id].hover);
        obj.css({ fill: spotsconfiga.pins[id].overColor });
      },
      function() {
        $('#anatip').hide();
        obj.css({ fill: spotsconfiga.pins[id].upColor });
      }
    );
    obj.mouseup(function() {
      obj.css({ fill: spotsconfiga.pins[id].overColor });
      if (spotsconfiga.pins[id].target === 'new_window') {
        window.open(spotsconfiga.pins[id].url);
      } else if (spotsconfiga.pins[id].target === 'same_window') {
        window.parent.location.href = spotsconfiga.pins[id].url;
      } else if (spotsconfiga.pins[id].target === 'modal') {
        $(spotsconfiga.pins[id].url).modal('show');
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
          .html(spotsconfiga.pins[id].hover);
        $('#anatip').css({ left: x, top: y });
      });
      obj.on('touchend', function() {
        $('#' + id).css({ fill: spotsconfiga.pins[id].upColor });
        if (spotsconfiga.pins[id].target === 'new_window') {
          window.open(spotsconfiga.pins[id].url);
        } else if (spotsconfiga.pins[id].target === 'same_window') {
          window.parent.location.href = spotsconfiga.pins[id].url;
        } else if (spotsconfiga.pins[id].target === 'modal') {
          $(spotsconfiga.pins[id].url).modal('show');
        }
      });
    }
  }
}
$(function() {
  var pins_len = spotsconfigb.pins.length;
  if (pins_len > 0) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var tsvg_obj = document.getElementById('anaspotsb');
    var svg_circle;
    for (var i = 0; i < pins_len; i++) {
      svg_circle = document.createElementNS(xmlns, 'circle');
      svg_circle.setAttributeNS(null, 'cx', spotsconfigb.pins[i].pos_X);
      svg_circle.setAttributeNS(null, 'cy', spotsconfigb.pins[i].pos_Y);
      svg_circle.setAttributeNS(null, 'r', spotsconfigb.pins[i].size / 2);
      svg_circle.setAttributeNS(null, 'fill', spotsconfigb.pins[i].upColor);
      svg_circle.setAttributeNS(null, 'stroke', spotsconfigb.pins[i].outline);
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
  if (spotsconfigb.pins[id].enabled === true) {
    obj.attr({ cursor: 'pointer' });
    obj.hover(
      function() {
        $('#anatip')
          .show()
          .html(spotsconfigb.pins[id].hover);
        obj.css({ fill: spotsconfigb.pins[id].overColor });
      },
      function() {
        $('#anatip').hide();
        obj.css({ fill: spotsconfigb.pins[id].upColor });
      }
    );
    obj.mouseup(function() {
      obj.css({ fill: spotsconfigb.pins[id].overColor });
      if (spotsconfigb.pins[id].target === 'new_window') {
        window.open(spotsconfigb.pins[id].url);
      } else if (spotsconfigb.pins[id].target === 'same_window') {
        window.parent.location.href = spotsconfigb.pins[id].url;
      } else if (spotsconfigb.pins[id].target === 'modal') {
        $(spotsconfigb.pins[id].url).modal('show');
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
          .html(spotsconfigb.pins[id].hover);
        $('#anatip').css({ left: x, top: y });
      });
      obj.on('touchend', function() {
        $('#' + id).css({ fill: spotsconfigb.pins[id].upColor });
        if (spotsconfigb.pins[id].target === 'new_window') {
          window.open(spotsconfigb.pins[id].url);
        } else if (spotsconfigb.pins[id].target === 'same_window') {
          window.parent.location.href = spotsconfigb.pins[id].url;
        } else if (spotsconfigb.pins[id].target === 'modal') {
          $(spotsconfigb.pins[id].url).modal('show');
        }
      });
    }
  }
}
