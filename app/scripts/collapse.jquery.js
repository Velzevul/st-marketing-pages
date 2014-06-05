/**
 * COLLAPSE
 *
 * sample usage:
 *
 *  <div class="acts-as-collapse">
 *    <div data-collapse-trigger class="is-active">toggle</div>
 *
 *    <div data-collapse>lorem ipsum dolor sit amet... </div>
 *  </div>
 *
 *  <script>
 *    $('.acts-as-collapse').collapse();
 *  </script>
 *
 */

(function($){
  $.fn.collapse = function(){
    this.each(function(index, elem){;
      init(elem);
    });

    function init(element){
      var trigger = $('[data-collapse-trigger]', element),
          body    = $('[data-collapse]', element);

      trigger.css('cursor', 'pointer');
      if (!trigger.hasClass('is-active')) body.hide();

      trigger.click(function(){
        trigger.toggleClass('is-active');
        body.slideToggle();
      });
    };

    return this;
  }
})(jQuery);