$(function(){
  'use strict';

  $('.acts-as-dropdown').dropdown();
  $('.acts-as-collapse').collapse();


  var offscreenBox = $('#offscreen-box'),
      offscreenLeftTrigger = $('#offscreen-left-trigger'),
      offscreenLeftPanel = $('#offscreen-left-panel'),
      offscreenRightTrigger = $('#offscreen-right-trigger'),
      offscreenRightPanel = $('#offscreen-right-panel'),
      offscreenOverlay = $('#offscreen-overlay'),
      offscreenCloseButtons = $('.offscreen-close-button');

  offscreenLeftTrigger.click(function(){
    openLeftPanel();
  });

  offscreenRightTrigger.click(function(){
    openRightPanel();
  });

  offscreenCloseButtons.on('click', closeOffscreenPanels);

  function closeOffscreenPanels(){
    offscreenBox.removeClass('l-offscreen--open-left l-offscreen--open-right');

    offscreenOverlay.off('click', closeOffscreenPanels);
  }

  function openLeftPanel(){
    offscreenBox.addClass('l-offscreen--open-left');

    setTimeout(function(){
      offscreenOverlay.on('click', closeOffscreenPanels);
    },0);
  }

  function openRightPanel(){
    offscreenBox.addClass('l-offscreen--open-right');

    setTimeout(function(){
      offscreenOverlay.on('click', closeOffscreenPanels);
    },0);
  }
});